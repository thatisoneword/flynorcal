
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


const utils = {
  objectTruthyKeysToString,
  formatAMPM,
  setCookie,
  getCookie,
  checkCookie,
  expireCookie
}

export default utils
