import musselBackup from '../images/mussel1.jpg';
import mtTamBackup from '../images/tam_from_OB.jpg';
import missionPeakBackup from '../images/mission_peak_wide.jpg';
import mtDiabloBackup from '../images/mount_diablo_panoramic.jpg';
import otherSitesBackup from '../images/shasta_lg.jpg';

const sitesGeneralInfo = {
  musselRock: {
    name: 'musselRock',
    title: 'Mussel Rock (The Dumps)',
    mainImgUrl: 'http://www.flyfunston.org/newwebcam/panolarge.jpg',
    backupImg: musselBackup, //'./images/mussel1.jpg'
  },
  mtTam: {
    name: 'mtTam',
    title: 'Mt. Tam',
    mainImgUrl: null,
    backupImg: mtTamBackup
  },
  missionPeak: {
    name: 'missionPeak',
    title: 'Mission Peak',
    mainImgUrl: null,//'https://mthamilton.ucolick.org/hamcam/Cam1.ts.JPG',
    backupImg: missionPeakBackup
  },
  mtDiablo: {
    name: 'mtDiablo',
    title: 'Mt. Diablo',
    mainImgUrl: null,
    backupImg: mtDiabloBackup
  },
  otherSites: {
    name: 'otherSites',
    title: 'Other Flying Sites',
    mainImgUrl: null,
    backupImg: otherSitesBackup
  }
}

export default sitesGeneralInfo;
