import React from 'react';
import { connect } from 'react-redux';
import { setModalKey } from '../actions';
import ReactDOM from 'react-dom';
import modalData from '../variables/modalContent';
import HighChart from './HighChart';

class Modal extends React.Component {

  itemType = '';

  renderModal = () => {
    // if (this.itemType === 'highchart') {
    //   return <HighChart stationId={this.stationId} />;
    // }

    let item = modalData[this.props.modalKey];
    var imgOrIframe = null;
    var customLink = null;

    if (item.type === 'image') {
      imgOrIframe = <a className="modal-img-link" href={item.link} rel="noreferrer" target="_blank">
        <img height="100%" src={item.imgOrIframeSrc} alt={item.title}/>
      </a>
    }
    if (item.type === 'iFrame') {
      imgOrIframe = <iframe
          src={item.imgOrIframeSrc}
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
    if (!this.props.modalKey) return null;
    // const staticData = modalData[this.props.modalKey];
    // const
    if (!modalData[this.props.modalKey] && !this.props.stationHistory[this.props.modalKey]) {
      console.log(`No data for key ${this.props.modalKey}`)
      return null;
    }
    if (!modalData[this.props.modalKey] && this.props.stationHistory[this.props.modalKey]) {
      // This is a chart
      this.itemType = 'highchart';
    } else { // this is a modal that gets it data from the static modalData object
      this.itemType = modalData[this.props.modalKey].type;
    }


    return ReactDOM.createPortal(
      <div className="modal" onClick={() => this.props.setModalKey('')}>
        <div className={`modal-content ${this.itemType}`} onClick={(e) => e.stopPropagation()}>
          <span className="close close-modal-btn" onClick={() => this.props.setModalKey('')}>&times;</span>
          <div id="modal-content-inner">
            {this.itemType === 'highchart' ? <HighChart stationId={this.props.modalKey} /> : this.renderModal()}
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
