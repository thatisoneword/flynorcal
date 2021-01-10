// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same
var stations = {
  'KCAWEED23': {
    stationId: 'KCAWEED23',
    type: 'station',
    title: 'Whaleback / Herd Peak',
    description: 'Weed, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/weed/KCAWEED23',
    visualContentUrl: 'http://api.nvseismolab.org/camera/Axis-Weed1',
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
