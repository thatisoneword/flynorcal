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
        <div className="bar-item bar-header top-space" >Flying Site Information</div>
        <a href="https://wingsofrogallo.org/mission-ridge/" className="bar-item format-button" target="_blank" rel="noreferrer">Mission Peak</a>
        <a href="https://wingsofrogallo.org/ed-levin/" className="bar-item format-button" target="_blank" rel="noreferrer">Ed Levin</a>

        <div className="bar-item bar-header top-space" >Live Conditons</div>
        <a href="http://windslammer.hang-gliding.com/WindSlammer/" className="bar-item format-button" target="_blank" rel="noreferrer">Windslammer Live Stn.</a>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.missionPeakLiveCam)}>Mission Peak Live Cam</button>

        <div className="bar-item bar-header top-space" >NWS Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsMissionPeak)}>Mission Peak NWS</button>

        <div className="bar-item bar-header top-space">Wunderground Forecasts</div>
        {this.props.allStations && this.renderForcasts()}

        <div className="bar-item bar-header top-space">Other Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.windyForcastMissionPeak)}>Windy.com</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.oaklandSounding)}>Oakland Sounding</button>
        <a href="https://www.star.nesdis.noaa.gov/goes/sector_band.php?sat=G17&sector=wus&band=GEOCOLOR&length=24" className="bar-item format-button" target="_blank" rel="noreferrer">Geos West loop</a>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsBayAreaDiscission)}>NWS Area Forcast Discussion</button>
        <a href="https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#10.88/37.7499/-122.3566" className="bar-item format-button" target="_blank" rel="noreferrer">Purple Air</a>

        <div className="bar-item bar-header top-space">Other Resources</div>
        <a href="https://tfr.faa.gov/tfr_map_ims/html/cc/scale6/tile_3_15.html" className="bar-item format-button" target="_blank" rel="noreferrer">TFRs</a>
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
