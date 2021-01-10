import React from 'react';
import { connect } from 'react-redux';
import suncalc from 'suncalc'; // this does dawn/dusk, sunrise/sunset and other time calculations
import { setImgCacheBuster, setImgCacheBusterDelayed, setIsDaytimeAction, toggleAppClasses } from '../actions';

import Sidebar from './Sidebar';
import MainImage from './MainImage';
import AllStations from './AllStations';
import Modal from './Modal';
import utils from './utils';

// TODO:
// add main images for other flying sites
// banner messages

class App extends React.Component {

  cacheBusterIntervalInMinutes = 5;

  componentDidMount() {
    setInterval( () => this.setImgCacheBuster(), 60000 * this.cacheBusterIntervalInMinutes );
    setInterval( () => this.setIsDaytime(), 60000 ); // check if it's daytime once a minute
    this.setIsDaytime();

    // console.log('this the cookie', utils.getCookie('flyingSite'));
    // console.log('setting cookie', utils.setCookie('flyingSite1', 'bop', 1))
    // console.log('the full cookie', document.cookie);
  }

  setIsDaytime = () => {
    const times = suncalc.getTimes(new Date(), 37.753, -122.802);

    // console.log('dusk', times);
    // console.log('dusk', times.nauticalDusk);
    // console.log('now', new Date());

    const dawnISO = times.nauticalDawn.toISOString();
    const duskISO = times.nauticalDusk.toISOString();
    const nowISO = new Date().toISOString();

    // only set it if it changed
    if ( nowISO > dawnISO && (nowISO < duskISO) !== this.props.isDaytime ) {
      this.props.setIsDaytimeAction(!this.props.isDaytime);
    }

    ///// Turn it to day or night for development purposes //////
    // this.props.setIsDaytimeAction(false); // true = day / false = night
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

  render() {
    return (
      <div className={utils.objectTruthyKeysToString(this.props.appClasses)}>
        <Sidebar />
        <div className="menu-button" onClick={() => this.props.toggleAppClasses('show-menu')}>☰</div>
        <div id="alert-banner-container"></div>
        <MainImage />
        <AllStations />
        <Modal />
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
    appClasses: state.appClasses
  }
}

export default connect(mapStateToProps, { setImgCacheBuster, setImgCacheBusterDelayed, setIsDaytimeAction, toggleAppClasses })(App);
