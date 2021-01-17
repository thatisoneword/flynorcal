import modalContent from './modalContent';

// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

const moreMissionPeakCameras = <div className="additional-content">
  Additional views:
  <ul>
    <li><a href="http://api.nvseismolab.org/camera/Axis-Mission2" target="_blank" rel="noreferrer" >Mission Peak looking east</a></li>
    <li><a href="http://api.nvseismolab.org/camera/Axis-CupertinoHills" target="_blank" rel="noreferrer" >Cupertino Hills looking east</a></li>
  </ul>
</div>;

var stations = {
  'KCAFREMO33': {
    stationId: 'KCAFREMO33',
    type: 'station',
    title: 'Ponderosa Heights',
    description: 'Freemont, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/fremont/KCAFREMO33',
    visualContentUrl: 'http://windslammer.hang-gliding.com/WindSlammer/snap.jpg',
    visualContentUrlAlt: null,
    modalContentObj: null,
    stationImgLinkedInsteadOfModal: 'http://windslammer.hang-gliding.com/WindSlammer/', // optional so statio img open url
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: moreMissionPeakCameras,
    cameraViewText: '',
    stationStatsUpdateIntervalInSeconds: 250, // Seconds interval
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
    additionalContent: moreMissionPeakCameras,
    cameraViewText: 'Looking SSW over Ed Levin park and San Jose.',
    stationStatsUpdateIntervalInSeconds: 306, // Seconds interval
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
    additionalContent: moreMissionPeakCameras,
    cameraViewText: 'Looking south west from the San Jose foothills, just south of Alum Rock.',
    stationStatsUpdateIntervalInSeconds: 301, // Seconds interval
  },
  'KCASANJO384': {
    stationId: 'KCASANJO384',
    type: 'station',
    title: 'Evergreen, San Jose Ca.',
    description: 'Freemont, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/san-jose/KCASANJO384',
    visualContentUrl: 'http://mthamilton.ucolick.org/hamcam/Cam1.ts.JPG',
    visualContentUrlAlt: null,
    modalContentObj: null,
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: moreMissionPeakCameras,
    cameraViewText: 'Looking north west from Lick Observatory.',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}

export default stations;
