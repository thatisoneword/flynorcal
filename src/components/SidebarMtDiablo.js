import React from 'react';
import { connect } from 'react-redux';
import { setModalKey } from '../actions';
import modalContent from '../variables/modalContent';
import utils from './utils';

class SidebarContent extends React.Component {

  render() {
    return (
      <>
        <div className="bar-item bar-header" >Mt Diablo Information</div>
        <a href="https://wingsofrogallo.org/mt-diablo/" className="bar-item format-button" target="_blank" rel="noreferrer">Wings Of Rogallo</a>

        <div className="bar-item bar-header top-space" >NWS Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsMtDiablo)}>Mt. Diablo NWS</button>

        <div className="bar-item bar-header top-space" >Soundings</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.oaklandSounding)}>Oakland Sounding</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.vandenbergSounding)}>Vandenberg Sounding</button>

        <div className="bar-item bar-header top-space">Wunderground Forecasts</div>
        {this.props.allStations && utils.renderForcastsForSidebar(this.props.allStations)}

        <div className="bar-item bar-header top-space">Other Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.windyForcastMtDiablo)}>Windy.com</button>
        <a href="https://www.star.nesdis.noaa.gov/goes/sector_band.php?sat=G17&sector=wus&band=GEOCOLOR&length=24" className="bar-item format-button" target="_blank" rel="noreferrer">Geos West loop</a>
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
