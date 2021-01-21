
import modalContent from './modalContent';
// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

const morePacificaCameras = <div className="additional-content">
  Additional views:
  <ul>
    <li><a href="https://www.youtube.com/watch?v=L6e1EEA-dQI" target="_blank" rel="noreferrer" >Cheetah launch camera.</a></li>
    <li><a href="https://www.youtube.com/watch?v=8gkxC22E-sY" target="_blank" rel="noreferrer" >Live Mori Point camera.</a></li>
    <li><a href="https://www.youtube.com/watch?v=G_GvJqITbOM" target="_blank" rel="noreferrer" >Live Pacifica waterfront camera</a></li>
  </ul>
</div>;


var stations = {
  'KCAPACIF205': {
    stationId: 'KCAPACIF205',
    type: 'station',
    title: 'Pacifica Pier',
    description: 'Pacifica State Beach',
    wundergroundLink: 'https://www.wunderground.com/weather/us/ca/pacifica/KCAPACIF205',
    visualContentUrl: 'https://www.mixdivr.org/livecam/pier_image_small.jpg',
    visualContentUrlAlt: null,
    modalContentObj: modalContent.pacificaPierCam,
    stationNightImg: 'https://i.ytimg.com/vi/zYi_5AF6B2A/mqdefault.jpg',
    additionalContent: null,
    cameraViewText: 'Looking west to the Pacifica pier.',
    stationStatsUpdateIntervalInSeconds: 201, // Seconds interval
  },
  'KCADALYC1': {
    stationId: 'KCADALYC1',
    type: 'station',
    title: 'Mussel Rock (Longview Dr.)',
    description: 'Overlooking Muscle rock',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/daly-city/KCADALYC1',
    visualContentUrl: 'https://icons.wunderground.com/webcamramdisk/b/a/barenjager/5/current.jpg',
    visualContentUrlAlt: null,
    stationNightImg: 'mussel_shane_sm.jpg',
    additionalContent: morePacificaCameras,
    cameraViewText: 'Looking south toward Pedro Point from Longview Drive in Pacifica.',
    stationStatsUpdateIntervalInSeconds: 62 // Seconds interval
  },
  'KCADALYC37': {
    stationId: 'KCADALYC37',
    type: 'station',
    title: 'Mussel Rock (Mr. Coyote)',
    description: 'Mussel Rock bowl',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/daly-city/KCADALYC37',
    visualContentUrl: 'https://icons.wunderground.com/webcamramdisk/b/a/barenjager/8/current.jpg',
    visualContentUrlAlt: null,
    stationNightImg: 'mussel1_sm.jpg',
    additionalContent: morePacificaCameras,
    cameraViewText: 'Looking north west over Mussel Rock bowl.',
    stationStatsUpdateIntervalInSeconds: 203, // Seconds interval
  },
  'KCASANFR69': {
    stationId: 'KCASANFR69',
    type: 'station',
    title: 'Fort Funston',
    description: 'Fort Funston Ropes building',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR69',
    visualContentUrl: 'http://www.flyfunston.org/newwebcam/ropes1wslarge.jpg',
    visualContentUrlAlt: null,
    stationNightImg: 'funston1_sm.jpg',
    additionalContent: morePacificaCameras,
    cameraViewText: 'Looking north west over Fort Funston launch.',
    stationStatsUpdateIntervalInSeconds: 207, // Seconds interval
  },
  'KCASANFR1683': {
    stationId: 'KCASANFR1683',
    type: 'station',
    title: 'Ocean Beach (Outer Sunset)',
    description: 'Outer Sunset near Lincoln',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-francisco/KCASANFR1683',
    visualContentUrl: 'http://www.oceanbeach.org/images/sunset.jpg',
    visualContentUrlAlt: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: morePacificaCameras,
    cameraViewText: 'Looking north west past the Cliffhouse to Marin.',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  }
}

export default stations;
