const appSettings = {
  apiKey: '6532d6454b8aa370768e63d6ba5a832e',
  weatherBaseUrl: 'https://api.weather.com/v2/pws/observations',
  weatherCurrentFullURL: 'https://api.weather.com/v2/pws/observations/current?apiKey=$API_KEY$&stationId=$STATION_ID$&numericPrecision=decimal&format=json&units=e',
  weatherAll1DayFullURL: 'https://api.weather.com/v2/pws/observations/all/1day?apiKey=$API_KEY$&stationId=$STATION_ID$&numericPrecision=decimal&format=json&units=e',
  mainImgURL: 'http://www.flyfunston.org/newwebcam/panolarge.jpg', //(3072×1450)
  sunriseSunsetApiURL: 'https://api.sunrise-sunset.org/json?lat=37.6608424&lng=-122.4915984&formatted=0',
  sunriseSunsetApiBaseURL: 'https://api.sunrise-sunset.org',
  nightMessageHasBeenShown: false,
  imagesUpdateIntervalInMinutes: 5, // Minutes update interval for main image and small station images
  modalImagesCacheBusterInMinutes: 15, // Minutes update interval for modal content images
  historyDataRefreshInMinutes: 6, // Minute update interval to fetch the historical data

}

export default appSettings;
