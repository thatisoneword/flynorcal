import React from 'react';
import { connect } from 'react-redux';
import { setImgCacheBusterDelayed, setModalKey } from '../actions';

class StationImg extends React.Component {

  launchModalOrLink = (modalContent, stationImgLinkedInsteadOfModal) => {
    if (stationImgLinkedInsteadOfModal) {
      window.open(stationImgLinkedInsteadOfModal);
    } else {
      this.props.setModalKey(modalContent);
    }
  }

  render() {
    if (!this.props.stationId) return;

    const { visualContentUrl, stationNightImg, stationImgLinkedInsteadOfModal } = this.props.allStations[this.props.stationId];

    const topImgPath = `${visualContentUrl}?random=${this.props.imgCacheBuster}`;
    const bottomImgPath = `${visualContentUrl}?random=${this.props.imgCacheBusterDelayed}`;

    const nightBgStyle = {backgroundImage: `url(${stationNightImg})`};
    const dayBgStyleBottom = {backgroundImage: `url(${bottomImgPath})`};
    const dayBgStyleTop = {backgroundImage: `url(${topImgPath})`};

    // use the optional stations modal content if it has it, this would be a reference from
    // the station object to the modal content object.
    const { modalContentObj } = this.props.allStations[this.props.stationId]
    // if there is specific modal content use that else use the station as the modal data
    const modalContent =  modalContentObj ? modalContentObj : this.props.allStations[this.props.stationId];


    // The JSX is 3 stacked divs with background images.
    // outer-bg-image bottom div contains the night/backup image in case the other 2 don't load
    // inner-bg-image div images are nearly identical but the bottom background's cache buster
    // is delayed by 2 seconds letting the top div load the new background before it is then given the
    // most recent cache buster. This prevents distracting flashing of the background image.
    return (
      <div className="outer-bg-image"
          onClick={() => this.launchModalOrLink(modalContent, stationImgLinkedInsteadOfModal)}
          style={nightBgStyle}>
        {
          this.props.isDaytime &&
          <>
            <div className="inner-bg-image bottom" style={dayBgStyleBottom}></div>
            <div
              className="inner-bg-image top"
              style={dayBgStyleTop}>
            </div>
          </>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStations: state.allStations,
    isDaytime: state.isDaytime,
    imgCacheBuster: state.imgCacheBuster,
    imgCacheBusterDelayed: state.imgCacheBusterDelayed
  }
}

export default connect( mapStateToProps, { setImgCacheBusterDelayed, setModalKey })(StationImg);
