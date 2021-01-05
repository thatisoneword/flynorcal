// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same
var stations = {
  // 'KCASANFR69': {
  //   stationId: 'KCASANFR69',
  //   type: 'station',
  //   title: 'Fort Funston',
  //   description: 'Fort Funston Ropes building',
  //   wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR69',
  //   visualContentUrl: 'http://www.flyfunston.org/newwebcam/ropes1wslarge.jpg',
  //   stationNightImg: 'funston1_sm.jpg',
  //   stationStatsUpdateIntervalInSeconds: 207, // Seconds interval
  // },
  // 'KCASANFR1683': {
  //   stationId: 'KCASANFR1683',
  //   type: 'station',
  //   title: 'Ocean Beach (Outer Sunset)',
  //   description: 'Outer Sunset near Lincoln',
  //   wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR1683',
  //   visualContentUrl: 'http://www.oceanbeach.org/images/sunset.jpg',
  //   stationNightImg: 'ocean_beach1_sm.jpg',
  //   stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  // },
  'KCAMILLV30': {
    stationId: 'KCAMILLV30',
    type: 'station',
    title: 'Mt Tamalpais / 777 ft.',
    description: 'Mill Valley, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/mill-valley/KCAMILLV30',
    visualContentUrl: 'http://www.sheltons.net/wx/webcam800.jpg',
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
