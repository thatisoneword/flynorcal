import React from 'react';
import { connect } from 'react-redux';
import { getCurrentStationData } from '../actions';
import StationImg from './StationImg';
import StationHistory from './StationHistory';
import utils from './utils';
// import funston1_sm from '../images/funston1_sm.jpg';
// import mussel_shane_sm from '../images/mussel_shane_sm.jpg';

class Station extends React.Component {

  stationId = this.props.stationId;
  calculatedWindDir = null;
  updateInterval = null

  componentDidMount() {
    this.props.getCurrentStationData(this.stationId);
    const {stationStatsUpdateIntervalInSeconds} = this.props.allStations[this.stationId];
    // updates the stations data on the interval set in the stations.js file
    this.updateInterval = setInterval( () => this.updateCurrentStationData(this.stationId), stationStatsUpdateIntervalInSeconds * 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  updateCurrentStationData = stationId => {
    if (this.props.shouldAutoUpdate) {
      this.props.getCurrentStationData(this.stationId);
    }
  }

  renderStationTitle = () => {
    const { title, wundergroundLink } = this.props.allStations[this.stationId];
    return <div className="station-title"><a href={wundergroundLink} target="_blank" rel="noreferrer">{title}</a></div>
  }

  // This makes the arrow behave more like a windsock when passing Due North
  setWindDirection = () => {
    const { winddir }  = this.props.currentForcast[this.stationId];
    if (winddir > 180) {
      this.calculatedWindDir = `-${360 - winddir}`;
    } else {
      this.calculatedWindDir = winddir;
    }
  }

  renderStationStats = () => {
    if (!this.props.currentForcast[this.stationId]) {
      return <div className="error-or-no-data outer-arrow-container">Station offline</div>;
    }
    const { temp, windSpeed, windGust} = this.props.currentForcast[this.stationId].imperial;
    //const { winddir} = this.props.currentForcast[this.stationId];

    this.setWindDirection();

    const rotateStyles = {transform: `rotate(${this.calculatedWindDir}deg)`, msTransform: `rotate(${this.calculatedWindDir}deg)`};

    return (
      <>
        {temp && <div className="station-temp">{`${Math.round(temp)}° F`}</div>}
        <div className="outer-arrow-container">
        <div id={`"${this.stationId}-arrow"`} className="arrow-container arrow-up" style={rotateStyles}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35px" viewBox="0 0 24 24" className="svgArrow">
              <path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/>
              <title>{`From ${this.calculatedWindDir} degrees`}</title>
            </svg>
          </div>
          <div className="station-speed-gust">
            {Math.round(windSpeed)}
            <div className="station-gust">{windGust ? Math.round(windGust) : 0}</div>
          </div>
        </div>
      </>
    );
  }

  renderLastUpdateTime = () => {
    if (!this.props.currentForcast[this.stationId]) {
      return <div className="last-updated">Station offline</div>;
    }
    const lastUpdate = utils.formatAMPM(this.props.currentForcast[this.stationId].obsTimeLocal);
    return <div className="last-updated">{`Current observation ${lastUpdate}`}</div>;
  }

  render() {
    return(
      <>
        <div className="flex-item" id={this.stationId} key={this.stationId}>
          <div className="station-container">
            {this.renderStationTitle()}
            {this.renderStationStats()}
          </div>
            <StationHistory stationId={this.stationId} />
            <StationImg stationId={this.stationId} />
            {this.renderLastUpdateTime()}
        </div>
      </>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentForcast: state.currentForcasts,
    allStations: state.allStations,
    shouldAutoUpdate: state.shouldAutoUpdate,
    isDaytime: state.isDaytime
  }
}

export default connect( mapStateToProps, { getCurrentStationData })(Station);
