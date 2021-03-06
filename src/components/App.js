import React from 'react';
import { connect } from 'react-redux';
import suncalc from 'suncalc'; // this does dawn/dusk, sunrise/sunset and other time calculations
import './App.css';

import LocationSelect from './LocationSelect';
import Sidebar from './Sidebar';
import MainImage from './MainImage';
import AllStations from './AllStations';
import Modal from './Modal';
import utils from './utils';
import AlertBanner from './AlertBanner';
import { nightMessage, autoRefreshStoppedMessage } from '../variables/bannerMessages';

import {  setImgCacheBuster,
          setImgCacheBusterDelayed,
          setIsDaytimeAction,
          toggleAppClasses,
          addBannerMessage,
          setShouldAutoUpdate } from '../actions';


class App extends React.Component {

  cacheBusterIntervalInMinutes = 5;
  autoRefreshTimeOutInMinutes = 20;

  componentDidMount() {
    setInterval( () => this.setImgCacheBuster(), 60000 * this.cacheBusterIntervalInMinutes );
    setInterval( () => this.setIsDaytime(), 60000 ); // check if it's daytime once a minute
    // Set the autoUpdate timeout
    setTimeout( () => this.autoRefreshTimedOut(), this.autoRefreshTimeOutInMinutes * 60000 );
    this.setIsDaytime();

    // console.log('this the cookie', utils.getCookie('flyingSite'));
    // console.log('setting cookie', utils.setCookie('flyingSite1', 'bop', 1))
    // console.log('the full cookie', document.cookie);
  }

  setIsDaytime = () => {
    const times = suncalc.getTimes(new Date(), 37.753, -122.802);

    // console.log('times', times);
    // console.log('dusk', times.nauticalDusk);
    // console.log('now', new Date());

    const dawnISO = times.nauticalDawn.toISOString();
    const duskISO = times.nauticalDusk.toISOString();

    let d = new Date();
    ///// Turn it to day or night for development purposes //////
    //d.setHours(20,0,0,0); // set time now to 10pm
    //d.setHours(11,0,0,0); // set time now to 11am
    //d.setHours(4,0,0,0); // set time now to 4am
    const nowISO = d.toISOString();

    if ( nowISO > duskISO && !utils.getCookie('nightBannerHasBeenSeen') ) {
      this.props.addBannerMessage(nightMessage);
      utils.setNightBannerHasBeenSeenCookie(times.solarNoon);

    }

    // set isDayTime only if it has changed
    const isDay = nowISO > dawnISO && (nowISO < duskISO);
    if ( isDay && !this.props.isDaytime ) {
      this.props.setIsDaytimeAction(true);
    } else if ( !isDay && this.props.isDaytime ) {
      this.props.setIsDaytimeAction(false);
    }

  }

  autoRefreshTimedOut = () => {
    if (!window.keepAlive) {
      this.props.setShouldAutoUpdate() // sets to false so no auto update
      this.props.addBannerMessage(autoRefreshStoppedMessage);
    } else {
      window.keepAlive = false;
      // give 40 more minutes of autorefresh time
      setTimeout( () => this.autoRefreshTimedOut(), 40 * 60000);
    }
  }

  setImgCacheBuster = () => {
    if (this.props.shouldAutoUpdate) {
      this.props.setImgCacheBuster();
      // this allows the new image to load while the last cached image is in the background
      // This prevents distracting flickering as the new image loads so you don't see the night/backup image
      // then after three seconds the image behind recieves the same cache buster and changes
      // to the new image in preperation for the next update
      setTimeout(() => this.props.setImgCacheBusterDelayed(this.props.imgCacheBuster), 3000);
    }
  }

  handleSelectClick = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <div className={utils.objectTruthyKeysToString(this.props.appClasses)}>
        <div className="inner-content">

          <Sidebar />
          <div className="menu-button" onClick={() => this.props.toggleAppClasses('show-menu')}>???</div>
          <MainImage />
          <div className="site-select-container" onClick={(e) => this.handleSelectClick(e)}>
            <LocationSelect />
          </div>
          <AlertBanner />
          <AllStations />
          <Modal />

        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    shouldAutoUpdate: state.shouldAutoUpdate,
    imgCacheBuster: state.imgCacheBuster,
    dawnDusk: state.sunriseSunset,
    isDaytime: state.isDaytime,
    nightMessageHasBeenSeen: state.nightMessageHasBeenSeen,
    appClasses: state.appClasses
  }
}

export default connect(mapStateToProps, {
  setImgCacheBuster,
  setImgCacheBusterDelayed,
  setIsDaytimeAction,
  toggleAppClasses,
  addBannerMessage,
  setShouldAutoUpdate })(App);
