// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same
var stations = {
  'KCADANVI92': {
    stationId: 'KCADANVI92',
    type: 'station',
    title: 'Diablo Hacienda Station',
    description: 'Danville, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/danville/KCADANVI92',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-MtDiabloWest',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-MtDiabloWest',
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  },
  'KCADANVI19': {
    stationId: 'KCADANVI19',
    type: 'station',
    title: 'Diablo Highlands Country Estates',
    description: 'Danville, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/danville/KCADANVI19',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-Diablo',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-Diablo',
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  },
  'KCADANVI140': {
    stationId: 'KCADANVI140',
    type: 'station',
    title: 'Danville Station',
    description: 'Danville, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/danville/KCADANVI140',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-SRVFDStation31',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-SRVFDStation31',
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  }
}

export default stations;
