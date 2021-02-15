import getCurrentForcast from '../apis/axiosGetStationData';
import utils from '../components/utils';
// import { stations } from '../variables/stations';

export const addBannerMessage = (msgObj) => {
  return {
    type: 'ADD_BANNER_MESSAGE',
    payload: msgObj
  };
}

export const setShouldAutoUpdate = () => {
  return {
    type: 'AUTO_UPDATING',
    payload: false
  };
}

export const setNightMessageHasBeenSeen = (nightMessageSeenFlag) => {
  return {
    type: 'NIGHT_MESSAGE_HAS_BEEN_SEEN',
    payload: nightMessageSeenFlag
  };
}

export const toggleAppClasses = (classToToggle) => {
  return {
    type: 'TOGGLE_APP_CLASSES',
    payload: classToToggle
  };
}

export const setImgCacheBuster = () => {
  return { type: 'SET_IMG_CACHEBUSTER' };
}

export const setFlyingSite = flyingSite => {
  utils.setCookie('flyingSite', flyingSite, 365);
  window.location.hash = flyingSite;
  return {
    type: 'SET_FLYING_SITE',
    payload: flyingSite
  };
}

export const setIsDaytimeAction = isDaytime => {
  return {
    type: 'SET_IS_DAYTIME',
    payload: isDaytime
  };
}

export const setImgCacheBusterDelayed = (cacheBuster) => {
  return {
    type: 'SET_IMG_CACHEBUSTER_DELAYED',
    payload: cacheBuster
  };
}

export const setModalKey = (key) => {
  return {
    type: 'SET_MODAL_KEY',
    payload: key
  };
}

export const getCurrentStationData = stationId => async dispatch => {
  const response = await getCurrentForcast.get('/current', { params: {stationId: stationId} });

  dispatch({
    type: 'GET_STATION_DATA',
    payload: response.data
  });
}

export const getHistoryStationData = stationId => async dispatch => {
  const response = await getCurrentForcast.get('/all/1day', { params: {stationId: stationId} });

  dispatch({
    type: 'GET_STATION_HISTORY',
    payload: response.data
  });
}




// prams: {
//   apiKey: appSettings.apiKey,
//   stationId: stationId,
//   numericPrecision: 'decimal',
//   format: 'json',
//   units: 'e'
// }
