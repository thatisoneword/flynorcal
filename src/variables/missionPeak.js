import modalContent from './modalContent';

// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

var stations = {
  'KCAFREMO33': {
    stationId: 'KCAFREMO33',
    type: 'station',
    title: 'Ponderosa Heights',
    description: 'Freemont, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/fremont/KCAFREMO33',
    visualContentUrl: 'http://windslammer.hang-gliding.com/WindSlammer/snap.jpg',
    visualContentUrlAlt: null,
    modalContentObj: modalContent.windSlammerMission,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCAFREMO121': {
    stationId: 'KCAFREMO121',
    type: 'station',
    title: 'Warm Springs Hills',
    description: 'Freemont, CA',
    wundergroundLink: 'https://www.wunderground.com/weather/us/ca/fremont/KCAFREMO121',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-Mission1',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-Mission1',
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCASANJO489': {
    stationId: 'KCASANJO489',
    type: 'station',
    title: 'Sierra Vista Open Space',
    description: 'Freemont, CA',
    wundergroundLink: 'https://www.wunderground.com/weather/us/ca/san-jose/KCASANJO489',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-SanJoseFoothills',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-SanJoseFoothills',
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCASANJO384': {
    stationId: 'KCASANJO384',
    type: 'station',
    title: 'Evergreen, San Jose Ca.',
    description: 'Freemont, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-jose/KCASANJO384',
    visualContentUrl: 'https://mthamilton.ucolick.org/hamcam/Cam1.ts.JPG',
    visualContentUrlAlt: null,
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
