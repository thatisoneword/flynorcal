// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

const moreTamCameras = <div className="additional-content">
  Additional views:
  <ul>
    <li><a href="http://api.nvseismolab.org/camera/Axis-TamEast" target="_blank" rel="noreferrer" >Mt Tam looking east</a></li>
    <li><a href="http://api.nvseismolab.org/camera/Axis-BarnabeEast" target="_blank" rel="noreferrer" >Mt Barnaby looking east</a></li>
  </ul>
</div>;

var stations = {
  'KCAMILLV52': {
    stationId: 'KCAMILLV52',
    type: 'station',
    title: 'West Point Inn - Mt Tamalpais',
    description: 'Mill Valley, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/mill-valley/KCAMILLV52',
    visualContentUrl: 'http://www.sheltons.net/wx/webcam800.jpg',
    visualContentUrlAlt: null,
    stationNightImg: 'mike_tam_sm.jpg',
    additionalContent: moreTamCameras,
    cameraViewText: 'Looking west from Tiburon.',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCAMILLV30': {
    stationId: 'KCAMILLV30',
    type: 'station',
    title: 'Mt Tamalpais - 777 ft.',
    description: 'Mill Valley, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/mill-valley/KCAMILLV30',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-TamWest',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-TamWest',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: moreTamCameras,
    cameraViewText: 'Looking NNW over the back of Mt. Tamalpais.',
    stationStatsUpdateIntervalInSeconds: 291, // Seconds interval
  },
  'KCASAUSA58': {
    stationId: 'KCASAUSA58',
    type: 'station',
    title: 'Muir Beach',
    description: 'Larry\'s Weather Station above Muir Beach',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/sausalito/KCASAUSA58',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-MuirBeach',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-MuirBeach',
    stationNightImg: 'silhoutte_sm.jpg',
    additionalContent: moreTamCameras,
    cameraViewText: 'Looking north from Muir Beach.',
    stationStatsUpdateIntervalInSeconds: 207, // Seconds interval
  },
  // 'KCAMILLV87': {
  //   stationId: 'KCAMILLV87',
  //   type: 'station',
  //   title: 'Mt. Home Inn',
  //   description: 'Bert\'s station near Moutain Home Inn on Panorama',
  //   wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR1683',
  //   visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-TamWest',
  //   visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-TamWest',
  //   stationNightImg: 'ocean_beach1_sm.jpg',
  //   additionalContent: moreTamCameras,
  //   cameraViewText: 'Looking NNW over the back of Mt. Tamalpais.',
  //   stationStatsUpdateIntervalInSeconds: 215, // Seconds interval
  // },
  'KCASTINS13': {
    stationId: 'KCASTINS13',
    type: 'station',
    title: 'Stinson Beach',
    description: 'Stinson Beach Ca.',
    wundergroundLink: 'https://www.wunderground.com/weather/us/ca/stinson-beach/KCASTINS13',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-Bolinas',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-Bolinas',
    stationNightImg: 'stinson_beach_sm.jpg',
    additionalContent: moreTamCameras,
    cameraViewText: 'Looking south east over Bolinas Lagoon to Stinson Beach',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
