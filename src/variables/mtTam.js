// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same
var stations = {
  'KCAMILLV30': {
    stationId: 'KCAMILLV30',
    type: 'station',
    title: 'Mt Tamalpais / 777 ft.',
    description: 'Mill Valley, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/mill-valley/KCAMILLV30',
    visualContentUrl: 'http://www.sheltons.net/wx/webcam800.jpg',
    stationNightImg: 'mike_tam_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCASAUSA58': {
    stationId: 'KCASAUSA58',
    type: 'station',
    title: 'Muir Beach (Larry\'s)',
    description: 'Larry\'s Weather Station above Muir Beach',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/sausalito/KCASAUSA58',
    visualContentUrl: 'https://images-webcams.windy.com/50/1604847950/current/full/1604847950.jpg',
    stationNightImg: 'silhoutte_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 207, // Seconds interval
  },
  'KCAMILLV87': {
    stationId: 'KCAMILLV87',
    type: 'station',
    title: 'Mt. Home Inn (Bert)',
    description: 'Near Moutain Home Inn on Panorama',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR1683',
    visualContentUrl: 'http://api.nvseismolab.org/camera/Axis-TamWest',
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 215, // Seconds interval
  },
  'KCASTINS13': {
    stationId: 'KCASTINS13',
    type: 'station',
    title: 'Stinson Beach',
    description: 'Stinson Beach Ca.',
    wundergroundLink: 'https://www.wunderground.com/weather/us/ca/stinson-beach/KCASTINS13',
    visualContentUrl: 'http://api.nvseismolab.org/camera/Axis-Bolinas',
    stationNightImg: 'stinson_beach_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
