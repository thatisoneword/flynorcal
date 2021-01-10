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
        <div className="bar-item bar-header top-space" >Mt Tam Information</div>
        <a href="https://www.mchga.org/index.shtml" className="bar-item format-button" target="_blank" rel="noreferrer">MCHGA</a>

        <div className="bar-item bar-header top-space" >NWS Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsMtTam)}>Mt. Tam NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsStinsonBeach)}>Stinson Beach NWS</button>

        <div className="bar-item bar-header top-space">Wunderground Forecasts</div>
        {this.props.allStations && this.renderForcasts()}

        <div className="bar-item bar-header top-space">Other Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.windyForcastMtTam)}>Windy.com</button>
        <a href="https://www.star.nesdis.noaa.gov/goes/sector_band.php?sat=G17&sector=wus&band=GEOCOLOR&length=24" className="bar-item format-button" target="_blank" rel="noreferrer">Geos West loop</a>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.fogTodayforecast)}>Fog Today</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.tidesStinson)}>Tides Stinson Beach</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsBayAreaDiscission)}>NWS Area Forcast Discussion</button>
        <a href="https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#10.88/37.7499/-122.3566" className="bar-item format-button" target="_blank" rel="noreferrer">Purple Air</a>

        <div className="bar-item bar-header top-space">Other Resources</div>
        <a href="https://tfr.faa.gov/tfr_map_ims/html/reg/scale6/tile_2_14.html#meas" className="bar-item format-button" target="_blank" rel="noreferrer">TFRs</a>
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
