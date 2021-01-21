import React from 'react';
import { connect } from 'react-redux';
import { setModalKey } from '../actions';
import ReactDOM from 'react-dom';
import HighChart from './HighChart';
import './Modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state={ contentLoaded: false, modalStyleHeight: null }
    this.loadedRef = React.createRef();
    this.modalRef = React.createRef();
    this.modalContentContainerRef = React.createRef();
    this.modalContentInnerRef = React.createRef();
  }

  // Minimum requirements to launch a modal are an object that contain:
  // type: 'image', 'iFrame', 'chart', 'station'
  // title: string
  // visualContentUrl: absolute URL
  //////////////////////////
  // optional object properties
  // description: string
  // link: absolute url
  // linkText: string
  // additionalContent: string
  // stationId: string, this is just for charts

  componentDidUpdate() {
    if (this.loadedRef.current) {
      this.loadedRef.current.addEventListener('load', this.setContentLoaded);

    }
  }

  // modalStyleHeight = 444;

  // modalContentLoaded = () => {
  //   console.log('The model Content loaded callback');
  // }

  setContentLoaded = () => {
    if (!this.state.contentLoaded) {
      // this is to get rid of the loader once the content is loaded, because
      // the modal is resizable you can still see the loding image
      this.setState({ contentLoaded: true });

      // this is becase the dynamic content in the modal was not triggering the
      // scroll bars so we add a modal style height and that fixes it
      const innerHeight = this.modalContentInnerRef.current.clientHeight;
      const outerHeight = this.modalContentContainerRef.current.clientHeight
      if (innerHeight >= outerHeight) {
        this.setState({ modalStyleHeight: outerHeight }); // triggers scroll
      }
    }
  }

  renderModal = () => {

    let item = this.props.modalKey;
    let imgOrIframe = null;
    let customLink = null;

    if (item.type === 'station') {
      item.link = item.wundergroundLink;
      item.linkText = `${item.description} - station: ${item.stationId}`;
    }

    if (item.type === 'image' || item.type === 'station') {
      imgOrIframe = <a className="modal-img-link" href={`${item.visualContentUrlAlt || item.visualContentUrl}?cache=${this.props.imgCacheBuster}`} rel="noreferrer" target="_blank">
        <img
          ref={this.loadedRef}
          height="100%"
          src={`${item.visualContentUrlAlt || item.visualContentUrl}?cache=${this.props.imgCacheBuster}`}
          alt={item.title}/>
      </a>
    }
    if (item.type === 'iFrame') {
      imgOrIframe = <iframe
          src={`${item.visualContentUrl}?cache='none'`}
          ref={this.loadedRef}
          allow={item.allow ? item.allow : ''}
          title={item.title}
          frameBorder="0"
          allowFullScreen="allowfullscreen">
        </iframe>
    }
    if (item.link && item.linkText) {
      customLink = <div className="sub-header-content">
        <a href={item.link} target="_blank" rel="noreferrer" >{item.linkText}</a>
      </div>;
    }

    return (
      <>
        <div className="title-link-container">
          <h3 className="modal-title">{item.title}</h3>
          {customLink}
        </div>
        <div className="modal-dynamic-container">
          {imgOrIframe}
          {item.cameraViewText && <div className="camera-text">{item.cameraViewText}</div>}
          {item.additionalContent}
        </div>
      </>
    );
  }

  render() {
    if (!this.props.modalKey) return null; // makes the modal show/hide

    const modal = this.props.modalKey;

    return ReactDOM.createPortal(
      <div ref={this.modalRef} className="modal" onClick={() => this.props.setModalKey(null)}>
        <div
            style={ this.state.modalStyleHeight ? { height: `${this.state.modalStyleHeight}px` } : {} }
            ref={this.modalContentContainerRef}
            className={`modal-content ${modal.type} ${this.state.contentLoaded ? 'modal-content-loaded': 'error-loading-content'}`}
            onClick={(e) => e.stopPropagation()}>
          <span className="close close-modal-btn" onClick={() => this.props.setModalKey(null)}>&times;</span>
          <div ref={this.modalContentInnerRef} className="modal-content-inner">
            {modal.type === 'chart' ? <HighChart stationId={modal.stationId} /> : this.renderModal()}
          </div>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}

const mapStateToProps = (state) => {
  return {
    modalKey: state.modalKey,
    imgCacheBuster: state.imgCacheBuster,
    stationHistory: state.stationHistory
  }
}

export default connect(mapStateToProps, { setModalKey })(Modal);
