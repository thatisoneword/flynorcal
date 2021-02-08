import React from 'react';
import { connect } from 'react-redux';
import { setModalKey } from '../actions';
import modalContent from '../variables/modalContent';
import utils from './utils';

class SidebarContent extends React.Component {

  render() {
    return (
      <>
        <div className="bar-item bar-header" >Other Views</div>
        <a href="http://api.nvseismolab.org/camera/Axis-Weed2" className="bar-item format-button" target="_blank" rel="noreferrer">Moving Weed Camera</a>

        <div className="bar-item bar-header top-space" >NWS Forecasts</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsMtVaca)}>Mt. Vaca NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsChanning)}>Channing Hill NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsHerdWhaleback)}>Whaleback/Herd Peak NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsPotato)}>Potato Hill NWS</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.nwsTollhouse)}>Tollhouse NWS</button>

        <div className="bar-item bar-header top-space" >Soundings</div>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.oaklandSounding)}>Oakland Sounding</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.vandenbergSounding)}>Vandenberg Sounding</button>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.medfordSounding)}>Medford OR. Sounding</button>

        <div className="bar-item bar-header top-space">Wunderground Forecasts</div>
        {this.props.allStations && utils.renderForcastsForSidebar(this.props.allStations)}

        <div className="bar-item bar-header top-space">Other Forecasts</div>
        <a href="https://www.ndbc.noaa.gov/station_page.php?station=46092" className="bar-item format-button" target="_blank" rel="noreferrer">Monterey Buoy</a>
        <button className="bar-item format-button" onClick={() => this.props.setModalKey(modalContent.windyForcastMtTam)}>Windy.com</button>
        <a href="https://www.star.nesdis.noaa.gov/goes/sector_band.php?sat=G17&sector=wus&band=GEOCOLOR&length=24" className="bar-item format-button" target="_blank" rel="noreferrer">Geos West loop</a>


        <a href="https://forecast.weather.gov/product.php?site=NWS&issuedby=mtr&product=AFD&format=CI&glossary=1" className="bar-item format-button" target="_blank" rel="noreferrer">Bay Area NWS Forcast Discussion</a>
        <a href="https://forecast.weather.gov/product.php?site=STO&issuedby=STO&product=AFD&format=CI&version=1&glossary=1" className="bar-item format-button" target="_blank" rel="noreferrer">Sacramento NWS Forcast Discussion</a>
        <a href="https://forecast.weather.gov/product.php?site=MFR&issuedby=MFR&product=AFD&format=CI&version=1&glossary=1" className="bar-item format-button" target="_blank" rel="noreferrer">Medford Or. NWS Forcast Discussion</a>
        <a href="https://forecast.weather.gov/product.php?site=HNX&issuedby=HNX&product=AFD&format=CI&version=1&glossary=1" className="bar-item format-button" target="_blank" rel="noreferrer">San Joaquin Valley NWS Forcast Discussion</a>

        <a href="https://www.purpleair.com/map?opt=1/mAQI/a10/cC0#6.79/40.088/-122.853" className="bar-item format-button" target="_blank" rel="noreferrer">Purple Air</a>

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
