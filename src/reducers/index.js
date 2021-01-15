import { combineReducers } from 'redux';
//import stations from '../variables/stations';
import utils from '../components/utils';
import musselRock from '../variables/musselRock';
import mtTam from '../variables/mtTam';
import missionPeak from '../variables/missionPeak';
import mtDiablo from '../variables/mtDiablo';
import otherSites from '../variables/otherSites';

const sitesGeneralInfo = {
  musselRock: {
    name: 'musselRock',
    title: 'Mussel Rock (The Dumps)',
    mainImgUrl: 'http://www.flyfunston.org/newwebcam/panolarge.jpg',
    backupImg: './images/mussel1.jpg'
  },
  mtTam: {
    name: 'mtTam',
    title: 'Mt. Tam',
    mainImgUrl: null,
    backupImg: './images/tam_from_OB.jpg'
  },
  missionPeak: {
    name: 'missionPeak',
    title: 'Mission Peak',
    mainImgUrl: null,//'https://mthamilton.ucolick.org/hamcam/Cam1.ts.JPG',
    backupImg: './images/mission_peak_wide.jpg'
  },
  mtDiablo: {
    name: 'mtDiablo',
    title: 'Mt. Diablo',
    mainImgUrl: null,
    backupImg: './images/mount_diablo_panoramic.jpg'
  },
  otherSites: {
    name: 'otherSites',
    title: 'Other Flying Sites',
    mainImgUrl: null,
    backupImg: './images/shasta_lg.jpg'
  }
}

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
  error: null
}

const getFlyingSiteNameFromCookie = () => {
  const flyingSite = utils.getCookie('flyingSite')
  const urlPath = window.location.hash.slice(1);

 if (!!combineStations[urlPath] && !!sitesGeneralInfo[urlPath]) {
    return urlPath;
  } else if (!!combineStations[flyingSite] && !!sitesGeneralInfo[flyingSite] ) {
    return flyingSite;
  } else {
    // either the cookie is not found or there is no date for the key in the objects above
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

export const errorReducer = (state = INITIAL_STATE.error, action) => {
  const { error } = action;
  if (error) {
    return error;
  }
  return state;
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
  error: errorReducer
});
