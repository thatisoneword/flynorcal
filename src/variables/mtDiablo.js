import diablo1Thumb from '../images/Axis-Diablo-thumb.jpg';
import diabloWestThumb from '../images/Axis-MtDiabloWest-thumb.jpg';
import SRVFDThumb from '../images/Axis-SRVFDStation31-thumb.jpg';

// Add or remove stations from the list by modifying the stations object
// visualContentUrl is optional use 'visualContentUrl: null' for no image
// the station key and the stationId MUST be the same

const moreDiabloCameras = <div className="additional-content">
  Additional views:
  <ul>
    <li><a href="http://api.nvseismolab.org/camera/Axis-GrizzlyPeakLookout2" target="_blank" rel="noreferrer" >Grizzly Peak Lookout to the east</a></li>
    <li><a href="http://api.nvseismolab.org/camera/Axis-GrizzlyPeakLookout1" target="_blank" rel="noreferrer" >Grizzly Peak Lookout to the west</a></li>
  </ul>
</div>;

var stations = {
  'KCADANVI92': {
    stationId: 'KCADANVI92',
    type: 'station',
    title: 'Diablo Hacienda Station',
    description: 'Danville, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/danville/KCADANVI92',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-MtDiabloWest',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-MtDiabloWest',
    modalContentObj: null,
    stationNightImg: diabloWestThumb,
    additionalContent: moreDiabloCameras,
    cameraViewText: 'Mt. Diablo Peak looking south west.',
    stationStatsUpdateIntervalInSeconds: 301 // Seconds interval
  },
  'KCADANVI19': {
    stationId: 'KCADANVI19',
    type: 'station',
    title: 'Diablo Highlands Country Estates',
    description: 'Danville, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/danville/KCADANVI19',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-SRVFDStation31',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-SRVFDStation31',
    modalContentObj: null,
    stationNightImg: SRVFDThumb,
    additionalContent: moreDiabloCameras,
    cameraViewText: 'Looking north east to the base of Mt. Diablo from the San Ramon Valley Fire Station',
    stationStatsUpdateIntervalInSeconds: 301 // Seconds interval
  },
  'KCADANVI140': {
    stationId: 'KCADANVI140',
    type: 'station',
    title: 'Danville Station',
    description: 'Danville, CA',
    wundergroundLink: 'https://www.wunderground.com/forecast/us/ca/danville/KCADANVI140',
    visualContentUrl: 'http://api.nvseismolab.org/thumbnail/Axis-Diablo',
    visualContentUrlAlt: 'http://api.nvseismolab.org/camera/Axis-Diablo',
    modalContentObj: null,
    stationNightImg: diablo1Thumb,
    additionalContent: moreDiabloCameras,
    cameraViewText: 'Looking west accross the peak of Mt. Diablo',
    stationStatsUpdateIntervalInSeconds: 301 // Seconds interval
  }
}

export default stations;
