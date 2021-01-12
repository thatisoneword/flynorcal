import React from 'react';
import { connect } from 'react-redux';
import { setModalKey } from '../actions';
import modalContent from '../variables/modalContent';

class SidebarContent extends React.Component {

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
      <>
        <div className="bar-item bar-header top-space" >Live Cameras</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.cheetahLauchCam)}>Cheetah Launch Live Cam</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.pacificaPierCam)}>Pacifica Pier Live Cam</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.moriPointCam)}>Mori Point Live Cam</button>

        <div className="bar-item bar-header top-space" >NWS Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsMussel)}>Mussel Rock NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsFunston)}>Fort Funston NWS</button>

        <div className="bar-item bar-header top-space">Wunderground Forecasts</div>
        {this.props.allStations && this.renderForcasts()}

        <div className="bar-item bar-header top-space">Other Forecasts</div>
        <a href="http://weather.pacificaview.net/" className="bar-item format-button" target="_blank" rel="noreferrer">Sharp Park Station</a>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.windyforecast)}>Windy.com</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.fogTodayforecast)}>Fog Today</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.tidesPacifica)}>Tides for Pacifica</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsBayAreaDiscission)}>NWS Area Forcast Discussion</button>
        <a href="https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#10.88/37.7499/-122.3566" className="bar-item format-button" target="_blank" rel="noreferrer">Purple Air</a>

        <div className="bar-item bar-header top-space">Other Resources</div>
        <a href="https://tfr.faa.gov/tfr_map_ims/html/ns/scale6/tile_2_15.html#meas" className="bar-item format-button" target="_blank" rel="noreferrer">TFRs</a>
        <a href="http://www.flyfunston.org/" className="bar-item format-button" target="_blank" rel="noreferrer">Fellow Feathers</a>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStations: state.allStations
  }
}


export default connect(mapStateToProps, { setModalKey })(SidebarContent);
