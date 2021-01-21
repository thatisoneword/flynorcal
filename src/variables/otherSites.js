import modalContent from './modalContent';

// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

const moreWeedCameras = <div className="additional-content">
  Additional views:
  <ul>
  <li><a href="http://api.nvseismolab.org/camera/Axis-Weed" target="_blank" rel="noreferrer" >Lake Shastina looking north east to Herd Peak</a></li>
  <li><a href="http://api.nvseismolab.org/camera/Axis-MtBradley1" target="_blank" rel="noreferrer">Mt. Bradley looking north to Black Butte and Mt. Shasta</a></li>
  <li><a href="http://api.nvseismolab.org/camera/Axis-AntelopeYreka2" target="_blank" rel="noreferrer">Antelope Mountain looking east to Herd Peak</a></li>
  <li><a href="http://api.nvseismolab.org/camera/Axis-AntelopeYreka1" target="_blank" rel="noreferrer">Antelope Mountain looking north</a></li>
  <li><a href="http://api.nvseismolab.org/camera/Axis-BunchGrassLookout2" target="_blank" rel="noreferrer">Bunch Grass Lookout east to Hat Creek Rim, distant right.</a></li>
  <li><a href="http://api.nvseismolab.org/camera/Axis-Weed1" target="_blank" rel="noreferrer">Weed looking WSW</a></li>
  <li><a href="http://api.nvseismolab.org/camera/Axis-Weed2" target="_blank" rel="noreferrer">Weed rotating camera</a></li>
  </ul>
</div>;

const moreVacaCameras = <div className="additional-content">
  Additional views:
  <ul>
    <li><a href="http://api.nvseismolab.org/camera/Axis-MtVaca5" target="_blank" rel="noreferrer" >Mt. Vaca looking SSW</a></li>
    <li><a href="http://api.nvseismolab.org/camera/Axis-Atlas" target="_blank" rel="noreferrer" >Atlas Peak occasionally the view changes</a></li>
  </ul>
</div>;

var stations = {
  'KCAVACAV89': {
    stationId: 'KCAVACAV89',
    type: 'station',
    title: 'Mt. Vaca',
    description: 'VacaVille, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/vacaville/KCAVACAV89',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-MtVaca8',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-MtVaca8',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: moreVacaCameras,
    cameraViewText: 'Mt Vaca looking north east.',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCABENIC65': {
    stationId: 'KCABENIC65',
    type: 'station',
    title: 'Channing Hill',
    description: 'Granada Heights, Benicia, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/benicia/KCABENIC65',
    visualContentUrl: 'https://i.ytimg.com/vi/P9SEtKcJik8/mqdefault.jpg',
    visualContentUrlAlt: null,
    modalContentObj: modalContent.channingHillCam,
    stationNightImg: 'https://i.ytimg.com/vi/P9SEtKcJik8/mqdefault.jpg',
    additionalContent: '',
    cameraViewText: 'null',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCAWEED23': {
    stationId: 'KCAWEED23',
    type: 'station',
    title: 'Whaleback / Herd Peak',
    description: 'Weed, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/weed/KCAWEED23',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-HerdPeak',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-HerdPeak',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: moreWeedCameras,
    cameraViewText: 'Herd Peak looking south to Mt. Shasta.',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCAELKCR11': {
    stationId: 'KCAELKCR11',
    type: 'station',
    title: 'Potato Hill / Elk Creek Stn.',
    description: 'Elk Creek, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/elk-creek/KCAELKCR11',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-Sites1',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-Sites1',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: '',
    cameraViewText: 'Sites Ca. looking west to Snow and St. John Mountains',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCAAUBER10': {
    stationId: 'KCAAUBER10',
    type: 'station',
    title: 'Above Tollhouse (Auberry Stn.)',
    description: 'Tollhouse, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/auberry/KCAAUBER10',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-RoundMtnFresno',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-RoundMtnFresno',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: '',
    cameraViewText: 'Round Mountain, Fresno Ca. looking north east to Tollhouse',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}



export default stations;
