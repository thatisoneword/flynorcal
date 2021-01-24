import { combineReducers } from 'redux';
import utils from '../components/utils';
import musselRock from '../variables/musselRock';
import mtTam from '../variables/mtTam';
import missionPeak from '../variables/missionPeak';
import mtDiablo from '../variables/mtDiablo';
import otherSites from '../variables/otherSites';
import bannerMessages from '../variables/bannerMessages';
import sitesGeneralInfo from '../variables/sitesGeneralInfo';

const combineStations = {
  musselRock,
  mtTam,
  missionPeak,
  mtDiablo,
  otherSites
}
const initTime = new Date().getTime();

const INITIAL_STATE = {
  currentForcasts: {},
  stationHistory: {},
  gerneralLocation: 'coast',
  imgCacheBuster: initTime,
  imgCacheBusterDelayed: initTime,
  isDaytime: true,
  appClasses: {},
  modalKey: '',
  flyingSite: 'musselRock',
  nightMessageHasBeenSeen: false,
  error: null
}

export const bannerMessageReducer = (state = bannerMessages, action) => {
  switch (action.type) {
  case 'ADD_BANNER_MESSAGE':
    return [action.payload, ...state];
  default:
    return state;
  }
}

export const nightMessageHasBeenSeenReducer = (state = INITIAL_STATE.nightMessageHasBeenSeen, action) => {
  switch (action.type) {
  case 'NIGHT_MESSAGE_HAS_BEEN_SEEN':
     return action.payload
  default:
    return state;
  }
}

const getFlyingSiteNameFromCookie = () => {
  const flyingSite = utils.getCookie('flyingSite')
  const urlPath = window.location.hash.slice(1);

 if (!!combineStations[urlPath] && !!sitesGeneralInfo[urlPath]) {
    return urlPath;
  } else if (!!combineStations[flyingSite] && !!sitesGeneralInfo[flyingSite] ) {
    return flyingSite;
  } else {
    // either the cookie is not found or there is no data for the key in the
    // flying site specific data objects so return the default flying site.
    return INITIAL_STATE.flyingSite;
  }
}

export const stationReducer = (state = combineStations[getFlyingSiteNameFromCookie()], action) => {
  switch (action.type) {
  case 'SET_FLYING_SITE':
    return {...combineStations[action.payload]};
  default:
    return state;
  }
}

export const flyingSiteReducer = (state = sitesGeneralInfo[getFlyingSiteNameFromCookie()], action) => {
  switch (action.type) {
  case 'SET_FLYING_SITE':
    return {...sitesGeneralInfo[action.payload]};
  default:
    return state;
  }
}

export const toggleAppClassesReducer = (state = INITIAL_STATE.appClasses, action) => {
  switch (action.type) {
  case 'TOGGLE_APP_CLASSES':
    return {...state, [action.payload]: !!!state[action.payload]};
  default:
    return state;
  }
}

export const currentForcastReducer = (state = INITIAL_STATE.currentForcasts, action) => {
  switch (action.type) {
  case 'GET_STATION_DATA':
    if (action.payload.observations) {
     return {...state, [action.payload.observations[0].stationID]: action.payload.observations[0]};
   } else {
     return state;
   }
  default:
    return state;
  }
}

export const stationHistoryReducer = (state = INITIAL_STATE.stationHistory, action) => {
  switch (action.type) {
  case 'GET_STATION_HISTORY':
  if (action.payload.observations) {
     return {...state, [action.payload.observations[0].stationID]: action.payload.observations};
  } else {
    return state;
  }
  default:
    return state;
  }
}

export const imgCacheBusterReducer = (state = INITIAL_STATE.imgCacheBuster, action) => {
  switch (action.type) {
  case 'SET_IMG_CACHEBUSTER':
     return new Date().getTime();
  default:
    return state;
  }
}

export const modalKeyReducer = (state = INITIAL_STATE.modalKey, action) => {
  switch (action.type) {
  case 'SET_MODAL_KEY':
     return action.payload
  default:
    return state;
  }
}

export const imgCacheBusterDelayedReducer = (state = INITIAL_STATE.imgCacheBusterDelayed, action) => {
  switch (action.type) {
  case 'SET_IMG_CACHEBUSTER_DELAYED':
     return action.payload;
  default:
    return state;
  }
}

export const isDaytimeReducer = (state = INITIAL_STATE.isDaytime, action) => {
  switch (action.type) {
  case 'SET_IS_DAYTIME':
    return action.payload;
  default:
    return state;
  }
}

export default combineReducers({
  allStations: stationReducer,
  currentForcasts: currentForcastReducer,
  stationHistory: stationHistoryReducer,
  imgCacheBuster: imgCacheBusterReducer,
  imgCacheBusterDelayed: imgCacheBusterDelayedReducer,
  shouldAutoUpdate: () => true,
  isDaytime: isDaytimeReducer,
  appClasses: toggleAppClassesReducer,
  modalKey: modalKeyReducer,
  flyingSite: flyingSiteReducer,
  bannerMessages: bannerMessageReducer,
  nightMessageHasBeenSeen: nightMessageHasBeenSeenReducer
});
