
// this message added dynamically by the App component
export const nightMessage = {
  title: 'Nighttime Hours - ',
  message:'Station images only show the live view during daylight hours',
  priority: 'grey',
  dismissable: true,
  bannerVisabilityPerSite: [],
  linkUrl: '',
  linkText: ''
}

export const autoRefreshStoppedMessage = {
  title: 'Auto updates have stopped - ',
  message:'Please refresh if necessary',
  priority: 'yellow',
  dismissable: false,
  bannerVisabilityPerSite: [],
  linkUrl: '',
  linkText: ''
}

// const testMessage = {
//   title: 'Warning - ',
//   message:'Your are too cool to fly today',
//   priority: 'green', //'red', 'yellow', 'green', 'blue', 'black', 'grey'
//   dismissable: true,
//   // options are 'musselRock', 'mtTam', 'mtDiablo', 'missionPeak', 'otherSites'
//   // included flying site pages will be shown this banner message
//   // and empty array or null will show the banner on every page
//   bannerVisabilityPerSite: ['mtDiablo', 'missionPeak'], // only show on the Tam and Mission Peak pages
//   linkUrl: '',
//   linkText: ''
// }

// export const tamUpdateMessage = {
//   title: 'Road Closed - ',
//   message:'The road from the Pantoll ranger station up the mountain is closed do to high fire danger.',
//   priority: 'red',
//   dismissable: true,
//   bannerVisabilityPerSite: ['mtTam'],
//   linkUrl: 'https://www.parks.ca.gov/?page_id=471',
//   linkText: 'Call (415) 388-2070 or visit parks.ca.gov for more information'
// }

// add or uncomment message objects to this array to make them viewable
// the night message is dynamically added by App at the appropiate time.
const messageArray = [
  // testMessage,
  // tamUpdateMessage
];

export default messageArray;
