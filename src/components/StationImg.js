import React from 'react';
import { connect } from 'react-redux';
import { setImgCacheBusterDelayed } from '../actions';

class StationImg extends React.Component {

  render() {
    if (!this.props.stationId) return;

    const { stationImg, stationNightImg } = this.props.allStations[this.props.stationId];

    const topImgPath = `${stationImg}?random=${this.props.imgCacheBuster}`;
    const bottomImgPath = `${stationImg}?random=${this.props.imgCacheBusterDelayed}`;
    const stationNightImgPath = `${process.env.PUBLIC_URL}/images/${stationNightImg}`;

    const nightBgStyle = {backgroundImage: `url(${stationNightImgPath})`};
    const dayBgStyleBottom = {backgroundImage: `url(${bottomImgPath})`};
    const dayBgStyleTop = {backgroundImage: `url(${topImgPath})`};

    // The JSX is 3 stacked divs with background images.
    // outer-bg-image bottom div contains the night/backup image in case the other 2 don't load
    // inner-bg-image div images are nearly identical but the bottom background's cache buster
    // is delayed by 2 seconds letting the top div load the new background before it is then given the
    // most recent cache buster. This prevents distracting flashing of the background image.
    return (
      <div className="outer-bg-image" style={nightBgStyle}>
        {
          this.props.isDaytime &&
          <>
            <div className="inner-bg-image bottom" style={dayBgStyleBottom}></div>
            <div className="inner-bg-image top" style={dayBgStyleTop}></div>
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

export default connect( mapStateToProps, { setImgCacheBusterDelayed })(StationImg);
