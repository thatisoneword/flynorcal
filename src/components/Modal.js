import React from 'react';
import { connect } from 'react-redux';
import { setModalKey } from '../actions';
import ReactDOM from 'react-dom';
import HighChart from './HighChart';

class Modal extends React.Component {

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

  renderModal = () => {

    let item = this.props.modalKey;
    let imgOrIframe = null;
    let customLink = null;

    if (item.type === 'station') {
      item.link = item.wundergroundLink;
      item.linkText = `${item.description}, station: ${item.stationId}`;
    }

    if (item.type === 'image' || item.type === 'station') {
      imgOrIframe = <a className="modal-img-link" href={item.link} rel="noreferrer" target="_blank">
        <img height="100%" src={item.visualContentUrl} alt={item.title}/>
      </a>
    }
    if (item.type === 'iFrame') {
      imgOrIframe = <iframe
          src={item.visualContentUrl}
          allow={item.allow ? item.allow : ''}
          title={item.title}
          frameBorder="0"
          allowFullScreen="allowfullscreen">
        </iframe>
    }
    if (item.link && item.linkText) {
      customLink = <div className="additonal-content">
        <a href={item.link} target="_blank" rel="noreferrer" >{item.linkText}</a>
      </div>;
    }

    return (
      <>
        <h3 className="modal-title">{item.title}</h3>
        <div className="modal-dynamic-container">
          {imgOrIframe}
          {customLink}
          {item.additionalContent}
        </div>
      </>
    );
  }

  render() {
    if (!this.props.modalKey) return null; // makes the modal show/hide

    const modal = this.props.modalKey;

    return ReactDOM.createPortal(
      <div className="modal" onClick={() => this.props.setModalKey(null)}>
        <div className={`modal-content ${modal.type}`} onClick={(e) => e.stopPropagation()}>
          <span className="close close-modal-btn" onClick={() => this.props.setModalKey(null)}>&times;</span>
          <div id="modal-content-inner">
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
