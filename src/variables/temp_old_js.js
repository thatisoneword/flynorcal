// Cache Busters
var imgCacheParam, modalImagesCacheBuster;
// DOM elements
var mainImg, mainImgAndMessageContaner, alertBannerContainer, modal, docBody;

var bannerAlertArray = [ // example messages
  {
    title: 'Title text -',
    message: '', // text is required or this object will be ignored
    priority: 'green', // options: 'red' or 'danger', 'yellow' or 'warning', 'green' or 'success',
                      // 'blue' or 'primary', 'black' or 'dark' and 'grey'
    dismissable: false
  }//,
  // {
  //   title: 'The Title - ',
  //   message: 'This is a text message',
  //   priority: 'blue',
  //   dismissable: true
  // }
];

// used for nightime hours, don't delete
var nightMessage = {
  title: 'Night Hours - ',
  message:'Camera views are only shown during daylight hours',
  priority: 'grey',
  dismissable: true
}

var nightMessage


function setBackupImageClass() {
  mainImgAndMessageContaner.className = 'useBackupImage';
}

function closeBanner(e) {
  e.target.parentNode.parentNode.style.display = 'none';
}

function getWeatherData(stationId) {
  // concat URL
  const stationURL = settings.weatherCurrentFullURL.replace('$STATION_ID$', stationId).replace('$API_KEY$', settings.apiKey);

  fetch(stationURL)
    .then(
      function(response) {
        if (response.status !== 200) {
          handleError({statusCode: response.status, statusError: null, stationId: stationId})
          return;
        }
        response.json().then(function(data) {
          settings.animateWindArrow ? animateWindDir(data) : populateWeatherData(data);
        });
      }
    )
    .catch(function(err) {
      handleError({statusCode: null, statusError: err, stationId: stationId});
    });
}


function storeHistoryData(data) {
  if (data.observations && data.observations[0]) {
    stations[data.observations[0].stationID].history = data.observations;
  }
}

function handleError(data) {

  // handle data not being fetched for a station
  if(!data.stationId) {
    return;
  }

  var errorMessage;
  if (data.statusCode) {
    message = 'Station offline';
  } else if (data.statusError) {
    message = 'Error fetching data';
  } else {
    message = 'Unknown error fetching data';
  }

  const item = {stationID: data.stationId};
  const stationImg = stations[item.stationID].stationImg ? `<img width="300px" src="${stations[item.stationID].stationImg}?random=${imgCacheParam}">` : '&nbsp';

  var stationHtml = `<div class="station-container error-or-no-data">
      <div class="station-title">${stations[item.stationID].title}</div>
      <div class="outer-arrow-container">${message}</div>
  </div>
  <div class="inner-item-img">${stationImg}</div>
  <div class=last-updated>Station offline</div>`;

  document.getElementById(item.stationID).innerHTML = stationHtml;
}

function populateHistoryData(stationID){
  var historyDataSmall = [];
  var data = stations[stationID].history || [];
  if (data.length >= 2) {
    historyDataSmall = [...data];
  }
  if (historyDataSmall.length > 10) {
    var len = historyDataSmall.length;
    historyDataSmall = historyDataSmall.slice(len-10, )
  } else if (!data || data.length < 2) {
    return;  // the station html has the default message if the module is not rendered
  }

  historyInner = eachHistory(historyDataSmall);
  var startLable = formatAMPM(historyDataSmall[0].obsTimeLocal);
  var endLable = formatAMPM(historyDataSmall[historyDataSmall.length-1].obsTimeLocal);
  var histElement = `<div class="history-small-container" onclick="openModal('stationChart', '${stationID}')">
    <div class="history-small-row">
      ${historyInner.join('')}
    </div>
    <div class="history-small-row time-range">
      <div class="deemphisized-text">${startLable} ---</div>
      <div class="deemphisized-text">--- to ---</div>
      <div class="deemphisized-text">--- ${endLable}</div>
    </div>
  </div>`;

  function eachHistory(hist) {
    return hist.map(function(item){
      var gust = Math.round(item.imperial.windgustAvg);
      var arrow = `<svg height="15" width="15" style="transform: rotate(${item.winddirAvg}deg)">
        <title>From ${item.winddirAvg} degrees</title>
        <polygon points="7,0 12,15 3,15" style="fill: #bfbfbf;" />
      </svg>`
      var speed = Math.round(item.imperial.windspeedAvg);

      return `<div class="history-small-item">
        <span class="deemphisized-text">${gust}</span><br>${speed}<br>${arrow}
      </div>`
    })
  }
  document.getElementById(`${stationID}-history`).innerHTML = histElement;
}

function formatAMPM(date) {
  date = new Date(date);
  var timeAMPM = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return timeAMPM.toLowerCase();
}

function animateWindDir(data) {
  const item = data.observations[0];
  const lastWindDir = stations[item.stationID].lastWindDir;
  if (lastWindDir) { // exclude if being called for the first time
    var stationWindArror = document.getElementById(`${item.stationID}-arrow`);
    const windDir = item.winddir;
    const degreesDifference = Math.abs(lastWindDir - windDir);
    if (degreesDifference < 100) { // Don't animate big changes so it doesn't look busy
      var rotateDegrees;
      if (windDir > lastWindDir && (windDir - lastWindDir > 180)) {
        var d = 360 - windDir;
        rotateDegrees = `-${d}`;
      } else if (windDir < lastWindDir && (lastWindDir - windDir > 180)) {
        var d = 360 + windDir;
        rotateDegrees = 360 + windDir;
      } else {
        rotateDegrees = windDir;
      }
      if (stationWindArror) {
        stationWindArror.style.transform = `rotate(${rotateDegrees}deg)`;
      }
    }
  }
  stations[item.stationID].lastWindDir = item.winddir;
  setTimeout(function() {
    populateWeatherData(data);
  }, 1001);
}

function populateWeatherData(data) {

  const item = data.observations[0];
  const itemWindSpeed = Math.round(item.imperial.windSpeed);

  //const stationImg = stations[item.stationID].stationImg ? `<img width="300px" src="${stations[item.stationID].stationImg}?random=${imgCacheParam}">` : '&nbsp';
  const stationImg = getStationImage();
  var obsTimeAMPM = formatAMPM(item.obsTimeLocal)
  const lastUpdateTime = `Current observation ${obsTimeAMPM}`;

  // toggle and save the update character
  var upChar = stations[item.stationID].updateCharacter;
  upChar = (upChar === 'ø') ? 'o' : 'ø';
  stations[item.stationID].updateCharacter = upChar;

  var arrow = `<div id="${item.stationID}-arrow" class="arrow-container arrow-up" style="msTransform: rotate(${item.winddir}deg); transform: rotate(${item.winddir}deg);">
    <svg xmlns="http://www.w3.org/2000/svg" width="35px" viewBox="0 0 24 24" class="svgArrow"><path d="M0 3.795l2.995-2.98 11.132 11.185-11.132 11.186-2.995-2.981 8.167-8.205-8.167-8.205zm18.04 8.205l-8.167 8.205 2.995 2.98 11.132-11.185-11.132-11.186-2.995 2.98 8.167 8.206z"/>
      <title>From ${item.winddir} degrees</title>
    </svg>
  </div>`;

  var temp = item.imperial.temp ? `${item.imperial.temp}° F` : '&nbsp';

  var stationHtml = `<div class="station-container">
      <div class="station-title">${stations[item.stationID].title}</div>
      <div class="station-temp">${temp}</div>
      <div class="outer-arrow-container">
        ${arrow}
        <div class="station-speed-gust">
          ${itemWindSpeed}</br>
          <div class="station-gust">${item.imperial.windGust}</div>
        </div>
      </div>
  </div>
  <div id="${item.stationID}-history" class="inner-item-history">History not availble</div>
  <div class="inner-item-img">${stationImg}</div>
  <div class=last-updated>${lastUpdateTime} <span class="update-char">${upChar}</span></div>`;

  function getStationImage() {
    var path = '';
    // if we have an image and it's daytime and there was no error fetching the image.
    if (stations[item.stationID].stationImg && isDaytime() && !stations[item.stationID].imgFetchError) {
      path = stations[item.stationID].stationImg;
      return `<object data="${path}?random=${imgCacheParam}"  width="300" height="200">
          <img width="300px" src="${stations[item.stationID].stationNightImg}">
        </object>`;
    } else if (stations[item.stationID].stationNightImg) { // night image
      path = stations[item.stationID].stationNightImg
      return `<img width="300px" src="${path}">`; // no cachbuster
    } else {
      return '&nbsp';
    }
  }

  document.getElementById(item.stationID).innerHTML = stationHtml;
  populateHistoryData(item.stationID);
}

// Used by the sidebar and image zoom
function toggleBodyClass(classToToggle) {
  var bodyClasses = docBody.className;
  if ( bodyClasses && (bodyClasses.indexOf(classToToggle) >= 0) ) {
    bodyClasses = bodyClasses.replace(classToToggle, '');
  } else {
    bodyClasses += ' ' + classToToggle;
  }
  docBody.className = bodyClasses.trim();
}

function zoomMainImage() {
  toggleBodyClass('main-image-zoomed')
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function getHistoryData(stationId, callback) {
  // concat URL
  const stationURL = settings.weatherAll1DayFullURL.replace('$STATION_ID$', stationId).replace('$API_KEY$', settings.apiKey);

  return fetch(stationURL)
    .then(
      function(response) {
        if (response.status !== 200) {
          callback(`Status ${response.status} while getting history for ${stations[stationId].title}.`)
          return
        }
        response.json().then(function(data) {
          storeHistoryData(data);
          if (typeof callback === 'function') {
            callback();
          }
        });
      }
    )
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(`Error getting history for ${stationId}, errror: ${err}`);
      }
    });
}

function genericFetch(url, callback) {
  return fetch(url)
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Non 200 status in get history', response.status);
          callback(`error for ${url}`)
        }
        response.json().then(function(data) {
          if (typeof callback === 'function') {
            callback(data);
          }
        });
      }
    )
    .catch(function(err) {
      if (typeof callback === 'function') {
        callback(`error for ${url}`)
      }
    });
}

function populateDawnDusk(){
  var promise = new Promise(function(resolve, reject) {
    var resCallback = function(message) {
      resolve(message);
    };
    genericFetch(settings.sunriseSunsetApiURL, resCallback);
  })
  .then(function(data) {
      settings.dawn = new Date(data.results.civil_twilight_begin).toISOString();
      settings.dusk = new Date(data.results.civil_twilight_end).toISOString();
      if (!isDaytime() && !settings.nightMessageHasBeenShown) { // set the alt image and banner if it's nightime called from init
        showNightimeBannerAndImg();
      }
    }
  );
}

function showNightimeBannerAndImg() {
  console.log('Nightime hours show alternate images and banner');
  setBackupImageClass();
  showBannerMessages(nightMessage);
  settings.nightMessageHasBeenShown = true; // so we don't show it again
}

function isDaytime() {
  var dawn = settings.dawn;
  var dusk = settings.dusk;
  var now = new Date().toISOString();
  // if dawn/dusk times are stale get them again this happens once a day
  if ( dusk && (new Date(dusk).getDay() !== new Date().getDay()) ) {
    dawn = ''; // this lets the code below handle it until the API returns
    dusk = '';
    populateDawnDusk();
  }
  // gets an dawn/dusk iso date string set by the api if not available it makes them from the daylightStartEndPerMonth object
  if (!dawn || !dusk) { // API times not set yet
    const monthShort = new Date().toLocaleString('default', { month: 'short' });
    var monthDawn = settings.daylightStartEndPerMonth[monthShort][0];
    var monthDusk = settings.daylightStartEndPerMonth[monthShort][1];
    var today = new Date();
    dawn = new Date(today.getFullYear(), today.getMonth(), today.getDate(), monthDawn, 0, 0).toISOString();
    dusk = new Date(today.getFullYear(), today.getMonth(), today.getDate(), monthDusk, 0, 0).toISOString();
  }
  return now > dawn && (now < dusk);
}

function showBannerMessages(objectOrArrayOfMessages) {
  var msgHtml = alertBannerContainer.innerHTML;
  if ( Array.isArray(objectOrArrayOfMessages) ) {
    objectOrArrayOfMessages.forEach(function(item) {
      concatBannerHtml(item);
    });
    concatBannerHtml(objectOrArrayOfMessages);
  } else { // else this should be an array of alert objects
    concatBannerHtml(objectOrArrayOfMessages);
  }
  alertBannerContainer.innerHTML = msgHtml;

  function concatBannerHtml(messageObject) {
    if (messageObject.message) { //the message property is required or will be ignored
      var isClosable = '';
      if (messageObject.dismissable) {
        isClosable = `<span class="close close-banner" onclick="closeBanner(event)">&times;</span>`;
      }
      var msg = `<div class="alert-banner-outer ${messageObject.priority || 'blue'}">
                <div class="alert-banner-inner">
                  ${isClosable}
                  <strong>${messageObject.title || ''}</strong>${messageObject.message}
                </div>
              </div>`
      msgHtml += msg;
    }
  }
}

function initPage() {
  docBody = document.getElementsByTagName("BODY")[0];
  mainImgAndMessageContaner = document.getElementById('main-img-and-message');
  alertBannerContainer = document.getElementById('alert-banner-container');

  // set main image with cache buster param
  mainImg = document.getElementById('mainImg');
  imgCacheParam = new Date().getTime(); // cache buster
  mainImg.src = `${settings.mainImgURL}?random=${imgCacheParam}`;

  populateDawnDusk(); // and set the alt image and banner if it's nightime

  showBannerMessages(bannerAlertArray); // bannerAlertArray is commented examples right now

  //Dyamicaly create DOM elements for each station using the stations object
  var allStations = document.querySelector('#stations-all');
  var fragment = new DocumentFragment();
  for (const prop in stations) {
    var div = document.createElement('div');
    div.setAttribute('id', prop);
    div.setAttribute('class', 'flex-item');
    fragment.appendChild(div);

    //add an update characer to the stations object
    //this with be updated every time the station is statsUpdated
    //so it's easy to see if it's been statsUpdated
    stations[prop].updateCharacter = 'ø';
  }
  allStations.appendChild(fragment);

  // first get history data and store it, then get current data
  for (const prop in stations) {
    var promise = new Promise(function(resolve, reject) {
      var resCallback = function(message) {
        resolve(message);
      };
      getHistoryData(prop, resCallback);
    })
    .then(function(message) {
        if (message) { // only show if there is a problem
          console.log(message, 'This station may be down.');
        }
        getWeatherData(prop)
      }
    );
  }

  // Try and get each statioin image if there is a problem set 'imgFetchError: true' so we don't keep trying to load broken images
  for (const prop in stations) {
    fetch(stations[prop].stationImg)
      .then(function(response) {
        if (response.status !== 200) { stations[prop].imgFetchError = true; }
      }).catch(function(err){return null;});
  }

  //set historical data refresh interval
  for (const prop in stations) {
    setInterval(function() {
      var emptyFuction = function(){} // so we don't have to keep testing for it in getHistoryData
      getHistoryData(prop, emptyFuction);
    }, settings.historicalDataRefreshIntervalInMinutes * 60 * 1000); //minutes x seconds x milliseconds
  }

  //set station refresh interval for wind/gust/temperature
  for (const prop in stations) {
    setInterval(function() {
      getWeatherData(prop);
    }, stations[prop].stationStatsUpdateIntervalInSeconds * 1000); //seconds x milliseconds
  }

  // Set image cache interval and refresh main image
  setInterval(function() {
    // set camera sleeping class if it's that time
    var mainImgClassName = '';
    if (!isDaytime() && !settings.nightMessageHasBeenShown) {
      showNightimeBannerAndImg();
    } else if (isDaytime()) {
      // Daylight hours the camera views are refreshed
      // This also updates the imgCacheParam for the small images in the
      // stations sections so they won't refresh in most browers when the
      // wind/gust speed is updated unless they have this new imgCacheParam.
      // This pevents them from beign fetched too often.
      imgCacheParam = new Date().getTime();
      mainImg.src = `${settings.mainImgURL}?random=${imgCacheParam}`;
      // if we are coming to dawn setup day stuff just once
      if (settings.nightMessageHasBeenShown) {
        mainImgAndMessageContaner.className = ''; // show camera views
        alertBannerContainer.innerHTML = ''; // clean out all banner messages
        showBannerMessages(bannerAlertArray); // show configured banner messages
        settings.nightMessageHasBeenShown = false;
      }
    }
  }, settings.imagesUpdateIntervalInMinutes * 60 * 1000); //minutes x seconds x milliseconds

  // set cache buster interval from settings.modalImagesCacheBusterInMinutes for modal image Content
  modalImagesCacheBuster = new Date().getTime();
  setInterval(function() {
    modalImagesCacheBuster = new Date().getTime();
  }, settings.modalImagesCacheBusterInMinutes * 60 * 1000);
}

function setUpModal() {
  // Get the modal
  modal = document.getElementById("myModal");

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function openModal(modalContentKey, stationId) {
  var innerModal = document.getElementById('modal-content-inner');
  modal.style.display = "block";

  if (stationId) { // we know it's a chart
    innerModal.innerHTML = '<div id="chart-content-inner"></div>';
    makeHighchart(stationId);
    return
  }

  var innerModal = document.getElementById('modal-content-inner');
  item = modalContent[modalContentKey];
  var imgOrIframe = null;
  var customLink = null;
  if (item.type === 'image') {
    const fullImgURL = item.imgOrIframeSrc.replace('$CACHE_BUSTER$', modalImagesCacheBuster);
    imgOrIframe = `<a class="modal-img-link" href="${item.link}" target="_blank">
      <img src="${fullImgURL}" alt="${item.title}">
    </a>`
  }
  if (item.type === 'iFrame') {
    imgOrIframe = `<iframe src="${item.imgOrIframeSrc}" frameborder="0"></iframe>`
  }
  if (item.link && item.linkText) {
    customLink = `<div class="additonal-content">
      <a href="${item.link}" target="_blank" >${item.linkText}</a>
    </div>`;
  }
  var modalContentString = `
    <div class="modal-dynamic-container">
      <h3 class="modal-title">${item.title}</h3>
      ${imgOrIframe}
      ${customLink}
      ${item.additionalContent}
    </div>`;
  innerModal.innerHTML = modalContentString;
}

function closeModal() {
  modal.style.display = "none";
}

// set up when page is loaded
document.addEventListener('DOMContentLoaded', (event) => {
  initPage();
  setUpModal();
})
