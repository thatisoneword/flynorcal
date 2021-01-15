// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

const moreWeedCameras = <div className="additonal-content">
  Additional views <a href="http://api.nvseismolab.org/camera/Axis-Weed1" target="_blank" rel="noreferrer" >Weed1</a
  > and rotating <a
  href="http://api.nvseismolab.org/camera/Axis-Weed2" target="_blank" rel="noreferrer" >Weed2</a>
</div>;

const moreVacaCameras = <div className="additonal-content">
  Additional view <a href="http://api.nvseismolab.org/camera/Axis-MtVaca5" target="_blank" rel="noreferrer" >Vaca5</a>
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
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCAWEED23': {
    stationId: 'KCAWEED23',
    type: 'station',
    title: 'Whaleback / Herd Peak',
    description: 'Weed, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/weed/KCAWEED23',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-Weed',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-Weed',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: moreWeedCameras,
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
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  },
  'KCATOLLH22': {
    stationId: 'KCATOLLH22',
    type: 'station',
    title: 'Tollhouse',
    description: 'Tollhouse, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/tollhouse/KCATOLLH22',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-RoundMtnFresno',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-RoundMtnFresno',
    stationNightImg: 'ocean_beach1_sm.jpg',
    additionalContent: '',
    stationStatsUpdateIntervalInSeconds: 303, // Seconds interval
  }
}



export default stations;
