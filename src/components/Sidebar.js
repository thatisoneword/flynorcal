import React from 'react';
import { connect } from 'react-redux';
import { toggleAppClasses, setModalKey } from '../actions';
import modalContent from '../variables/modalContent';
import LocationSelect from './LocationSelect';

class Sidebar extends React.Component {

  showLocationSelect = false;

  openModal = (modalName) => {
    console.log('TODO: make openModal work', modalName);
    return null;
  }

  renderForcasts = () => {
    const stationsArr = [];
    for (const [key, val] of Object.entries(this.props.allStations)) {
      stationsArr.push(
        <a
          href={val.wundergroundLink}
          className="bar-item format-button"
          target="_blank"
          rel="noreferrer"
          key={key}>
          {val.title}
        </a>
      );
    }
    return stationsArr;
  }

  render() {
    return (
      <div className="sidebar bar-block card animate-right" id="rightMenu">

        <button onClick={() => this.props.toggleAppClasses('show-menu')}className="bar-item format-button close-button close">&times;</button>

        { this.showLocationSelect && <LocationSelect /> }

        <div className="bar-item bar-header top-space" >Mussel Rock (The Dumps)</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.cheetahLauchCam)}>Cheetah Launch Live Cam</button>

        <div className="bar-item bar-header top-space" >NWS Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsMussel)}>Mussel Rock NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsFunston)}>Fort Funston NWS</button>

        <div className="bar-item bar-header top-space">Wunderground Forecasts</div>
        {this.props.allStations && this.renderForcasts()}

        <div className="bar-item bar-header top-space">Other Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.windyforecast)}>Windy.com</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.fogTodayforecast)}>Fog Today</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.tidesPacifica)}>Tides for Pacifica</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsBayAreaDiscission)}>NWS Area Forcast Discussion</button>
        <a href="https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#10.88/37.7499/-122.3566" className="bar-item format-button" target="_blank" rel="noreferrer">Purple Air</a>

        <div className="bar-item bar-header top-space">Other Resources</div>
        <a href="https://tfr.faa.gov/tfr_map_ims/html/ns/scale6/tile_2_15.html#meas" className="bar-item format-button" target="_blank" rel="noreferrer">TFRs</a>
        <a href="http://www.flyfunston.org/" className="bar-item format-button" target="_blank" rel="noreferrer">Fellow Feathers</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKOzls3V1ONWfs_pRnacV0f7MAlaS0wPgEaW9lHfu9HMOnew/viewform" className="bar-item format-button" target="_blank" rel="noreferrer">Help And Feedback</a>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStations: state.allStations
  }
}

export default connect(mapStateToProps, { toggleAppClasses, setModalKey })(Sidebar);
