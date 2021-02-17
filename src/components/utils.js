import './Sidebar.css';

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

const setCookie = (name, value, expdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (expdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

const setNightBannerHasBeenSeenCookie = (noon) => {
  let noonNextDay = new Date(noon.setDate(noon.getDate() + 1));
  var expires = `expires=${noonNextDay.toUTCString()}`;
  document.cookie = `nightBannerHasBeenSeen=expires at noon; ${expires}; path=/`;
}

const getCookie = (name) => {
  var nameEqual = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(nameEqual) === 0) {
      return c.substring(nameEqual.length, c.length);
    }
  }
  return "";
}

const checkCookie = (name) => {
  var CookieValue = getCookie(name);
  if (name !== "") {
    console.log("cookie value is ", CookieValue);
  }
}

const expireCookie = (name) => document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;

const renderForcastsForSidebar = (allStations) => {
  const stationsArr = [];
  for (const [key, val] of Object.entries(allStations)) {
    stationsArr.push(
      <a
        href={val.wundergroundLink}
        className="bar-item format-button"
        target="_blank"
        rel="noreferrer"
        key={key}>
        {val.title}
      </a>
    );
  }
  return stationsArr;
}


const utils = {
  objectTruthyKeysToString,
  formatAMPM,
  setCookie,
  getCookie,
  checkCookie,
  expireCookie,
  renderForcastsForSidebar,
  setNightBannerHasBeenSeenCookie,
}

export default utils
