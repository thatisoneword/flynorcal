
const objectTruthyKeysToString = (obj) => {
  let classArr = [];
  for (const [key] of Object.entries(obj)) {
    if (obj[key]) classArr.push(key);
  }
  return classArr.join(' ');
}

const formatAMPM = (date) => {
  date = new Date(date);
  var timeAMPM = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return timeAMPM.toLowerCase();
}

const utils = {
  objectTruthyKeysToString,
  formatAMPM
}

export default utils
