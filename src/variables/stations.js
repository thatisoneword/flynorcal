// Add or remove stations from the list by modifying the stations object
// stationImg is optional use 'stationImg: null' for no image
// the station key and the stationId MUST be the same
var stations = {
  'KCADALYC1': {
    stationId: 'KCADALYC1',
    title: 'Mussel Rock (Longview Dr.)',
    description: 'Overlooking Muscle rock',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/daly-city/KCADALYC1',
    stationImg: 'https://icons.wunderground.com/webcamramdisk/b/a/barenjager/5/current.jpg',
    stationNightImg: 'mussel_shane_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 62 // Seconds interval
  },
  'KCADALYC37': {
    stationId: 'KCADALYC37',
    title: 'Mussel Rock (Mr. Coyote)',
    description: 'Mussel Rock bowl',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/daly-city/KCADALYC37',
    stationImg: 'https://icons.wunderground.com/webcamramdisk/b/a/barenjager/8/current.jpg',
    stationNightImg: 'mussel1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 203, // Seconds interval
  },
  'KCASANFR69': {
    stationId: 'KCASANFR69',
    title: 'Fort Funston',
    description: 'Fort Funston Ropes building',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR69',
    stationImg: 'http://www.flyfunston.org/newwebcam/ropes1wslarge.jpg',
    stationNightImg: 'funston1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 207, // Seconds interval
  },
  'KCASANFR1683': {
    stationId: 'KCASANFR1683',
    title: 'Ocean Beach (Outer Sunset)',
    description: 'Outer Sunset near Lincoln',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR1683',
    stationImg: 'http://www.oceanbeach.org/images/sunset.jpg',
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  },
  'KCAPACIF185': {
    stationId: 'KCAPACIF185',
    title: 'Pacifica - Linda Mar',
    description: 'Pacifica State Beach',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/pacifica/KCAPACIF185',
    stationImg: 'https://images.webcamgalore.com/webcamimages/webcam-025714.jpg',
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 201, // Seconds interval
  },
  'KCAMILLV30': {
    stationId: 'KCAMILLV30',
    title: 'Mt Tamalpais / 777 ft.',
    description: 'Mill Valley, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/mill-valley/KCAMILLV30',
    stationImg: 'http://www.sheltons.net/wx/webcam800.jpg',
    stationNightImg: 'ocean_beach1_sm.jpg',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
