import { combineReducers } from 'redux';
//import stations from '../variables/stations';
import musselRock from '../variables/musselRock';
import mtTam from '../variables/mtTam';

// const numsArrayReducer = (numsArray = [], action) => {
//   if (action.type === 'UPDATE_NUMS') {
//     return [...numsArray, action.payload];
//   }
//   return numsArray;
// }
//
const combineStations = {
  musselRock: musselRock,
  mtTam: mtTam
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
export const stationReducer = (state = combineStations[INITIAL_STATE.flyingSite], action) => {
  switch (action.type) {
  case 'SET_FLYING_SITE':
    return {...combineStations[action.payload]};
  default:
    return state;
  }
}

export const flyingSiteReducer = (state = INITIAL_STATE.flyingSite, action) => {
  switch (action.type) {
  case 'SET_FLYING_SITE':
    return action.payload;
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
  //allStations: () => stations,
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
