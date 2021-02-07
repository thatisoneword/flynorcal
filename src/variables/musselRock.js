
import modalContent from './modalContent';
import shaneThumb from '../images/mussel_shane_sm.jpg';
import mussel1 from '../images/mussel1_sm.jpg';
import funston1 from '../images/funston1_sm.jpg';
import oceanBeach1 from '../images/ocean_beach1_sm.jpg';
import pacificaPier from '../images/pacificaPierThumb.jpg';
// See the stations object below for details on adding stations

const morePacificaCameras = <div className="additional-content">
  Additional views:
  <ul>
    <li><a href="https://www.youtube.com/watch?v=L6e1EEA-dQI" target="_blank" rel="noreferrer" >Cheetah launch camera.</a></li>
    <li><a href="https://www.youtube.com/watch?v=8gkxC22E-sY" target="_blank" rel="noreferrer" >Live Mori Point camera.</a></li>
    <li><a href="https://www.youtube.com/watch?v=G_GvJqITbOM" target="_blank" rel="noreferrer" >Live Pacifica waterfront camera</a></li>
  </ul>
</div>;


var stations = {
  ///////////////////////  Add / Remove stations //////////////////////////
  // each station must have a unique WunderGround key/stationId
  // the key below is a Wunderground ID for the station
  //
  // 'KCAPACIF205': {
  //   stationId: 'KCAPACIF205', // this must be the same as the station key above
  //   type: 'station', // used to tell the modal about the object type
  //   title: 'Pacifica Pier',
  //   description: 'Pacifica State Beach',
  //   wundergroundLink: 'https://www.wunderground.com/weather/us/ca/pacifica/KCAPACIF205', // WunderGroud Station link
  //   visualContentUrl: 'https://www.mixdivr.org/livecam/pier_image_small.jpg', // this is the station thumbnail
  //   visualContentUrlAlt: null, // this is used to link the station image to an external URL instead of a modal
  //   modalContentObj: modalContent.pacificaPierCam, // will use this object (see import above) for the modal data instead of the station obj
  //   stationNightImg: pacificaPier, // this image is imported above and is used during night hours
  //   additionalContent: null, // used in the modal for extra links when needed
  //   cameraViewText: 'Looking west to the Pacifica pier.', // modal picture text
  //   stationStatsUpdateIntervalInSeconds: 201, // refresh interval in seconds
  // },
  'KCAPACIF205': {
    stationId: 'KCAPACIF205',
    type: 'station',
    title: 'Pacifica Pier',
    description: 'Pacifica State Beach',
    wundergroundLink: 'https://www.wunderground.com/weather/us/ca/pacifica/KCAPACIF205',
    visualContentUrl: 'https://www.mixdivr.org/livecam/pier_image_small.jpg',
    visualContentUrlAlt: null,
    modalContentObj: modalContent.pacificaPierCam,
    stationNightImg: pacificaPier, //'https://i.ytimg.com/vi/zYi_5AF6B2A/mqdefault.jpg' this is Youtubes thumbnail
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
    stationNightImg: shaneThumb,
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
    stationNightImg: mussel1,
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
    stationNightImg: funston1,
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
    stationNightImg: oceanBeach1,
    additionalContent: morePacificaCameras,
    cameraViewText: 'Looking north west past the Cliffhouse to Marin.',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  }
}

export default stations;
