
const modalContent = {

  // NWS forcasts
  nwsMussel: {
    type: 'image',
    title: 'NWS 2 day forecast for Mussel Rock',
    description: 'National Weather Service 2 day forecast for Mussel Rock',
    link: 'http://forecast.weather.gov/MapClick.php?w0=t&w1=td&w2=hi&w3=sfcwind&w3u=1&w4=sky&w5=pop&w6=rh&w9=fog&w11u=1&w12u=1&AheadHour=0&Submit=Submit&FcstType=graphical&textField1=37.6666&textField2=-122.4949&site=all&unit=0&dd=&bw=',
    linkText: 'National Weather Servise page for Mussel Rock',
    visualContentUrl: 'http://forecast.weather.gov/meteograms/Plotter.php?lat=37.6666&lon=-122.4949&wfo=MTR&zcode=CAZ509&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=11101111000000100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6',
    additionalContent: ''
  },
  nwsFunston: {
    type: 'image',
    title: 'NWS 2 day forecast for Fort Funston',
    description: 'National Weather Service 2 day forecast for Mussel Rock',
    link: 'http://forecast.weather.gov/MapClick.php?w0=t&w1=td&w2=hi&w3=sfcwind&w3u=1&w4=sky&w5=pop&w6=rh&w9=fog&w11u=1&w12u=1&AheadHour=0&Submit=Submit&FcstType=graphical&textField1=37.6666&textField2=-122.4949&site=all&unit=0&dd=&bw=',
    linkText: 'National Weather Servise page for Fort Funston',
    visualContentUrl: 'http://forecast.weather.gov/meteograms/Plotter.php?lat=37.712&lon=-122.5034&wfo=MTR&zcode=CAZ006&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=11101111000000100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6',
    additionalContent: ''
  },
  nwsMtTam: {
    type: 'image',
    title: 'NWS 2 day forecast for Mt. Tam',
    description: 'National Weather Service 2 day forecast for Mt. Tamalpais',
    link: 'https://forecast.weather.gov/MapClick.php?w0=t&w1=td&w2=hi&w3=sfcwind&w3u=1&w4=sky&w5=pop&w6=rh&w9=fog&w11u=1&w12u=1&AheadHour=0&Submit=Submit&FcstType=graphical&textField1=37.91078&textField2=-122.62493&site=all&unit=0&dd=&bw=',
    linkText: 'National Weather Servise page for Mount Tamalpais',
    visualContentUrl: 'https://forecast.weather.gov/meteograms/Plotter.php?lat=37.9108&lon=-122.6249&wfo=MTR&zcode=CAZ507&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=11011111000000100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6',
    additionalContent: ''
  },
  nwsStinsonBeach: {
    type: 'image',
    title: 'NWS 2 day forecast for Stinson Beach',
    description: 'National Weather Service 2 day forecast for Stinson Beach',
    link: 'https://forecast.weather.gov/MapClick.php?lat=37.8981&lon=-122.6401&smap=1&unit=0&lg=en&FcstType=graphical',
    linkText: 'National Weather Servise page for Stinson Beach',
    visualContentUrl: 'https://forecast.weather.gov/meteograms/Plotter.php?lat=37.8981&lon=-122.6401&wfo=MTR&zcode=CAZ507&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=11011111000000100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6',
    additionalContent: ''
  },
  nwsMissionPeak: {
    type: 'image',
    title: 'NWS 2 day forecast for Mission Peak',
    description: 'National Weather Service 2 day forecast for Mission Peak',
    link: 'https://forecast.weather.gov/MapClick.php?lat=37.4996&lon=-121.8714&smap=1&unit=0&lg=en&FcstType=graphical',
    linkText: 'National Weather Servise page for Mission Peak',
    visualContentUrl: 'https://forecast.weather.gov/meteograms/Plotter.php?lat=37.4996&lon=-121.8714&wfo=MTR&zcode=CAZ507&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=11011111000000100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6',
    additionalContent: ''
  },
  nwsMtDiablo: {
    type: 'image',
    title: 'NWS 2 day forecast for Mt. Diablo',
    description: 'National Weather Service 2 day forecast for Mt. Diablo',
    link: 'https://forecast.weather.gov/MapClick.php?lat=37.8816&lon=-121.9146&smap=1&unit=0&lg=en&FcstType=graphical',
    linkText: 'National Weather Servise page for Mount Diablo',
    visualContentUrl: 'https://forecast.weather.gov/meteograms/Plotter.php?lat=37.8816&lon=-121.9146&wfo=MTR&zcode=CAZ507&gset=18&gdiff=3&unit=0&tinfo=PY8&ahour=0&pcmd=11011111000000100000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6',
    additionalContent: ''
  },

  // Windy forcasts
  windyforecast: {
    type: 'iFrame',
    title: 'Windy.com forecast for the San Francisco Bay Area',
    description: 'Animated wind forecast for the San Francisco Bay Area',
    link: 'https://www.windy.com/?37.723,-122.560,10',
    linkText: 'Windy.com',
    visualContentUrl: 'https://embed.windytv.com/embed2.html?lat=37.753&amp;lon=-122.802&amp;zoom=9&amp;level=surface&amp;overlay=wind&amp;menu=&amp;message=&amp;marker=&amp;forecast=24&amp;calendar=in&amp;location=coordinates&amp;type=map&amp;actualGrid=&amp;metricWind=mph&amp;metricTemp=%C2%B0F',
    additionalContent: ''
  },
  windyForcastMtTam: {
    type: 'iFrame',
    title: 'Windy.com forecast for Mt Tam',
    description: 'Animated wind forecast for Mount Tamalpais',
    link: 'https://www.windy.com/?37.928,-122.735,10',
    linkText: 'Windy.com',
    visualContentUrl: 'https://embed.windytv.com/embed2.html?lat=37.928&amp;lon=-122.735&amp;zoom=10&amp;level=surface&amp;overlay=wind&amp;menu=&amp;message=&amp;marker=&amp;forecast=24&amp;calendar=in&amp;location=coordinates&amp;type=map&amp;actualGrid=&amp;metricWind=mph&amp;metricTemp=%C2%B0F',
    additionalContent: ''
  },
  windyForcastMissionPeak: {
    type: 'iFrame',
    title: 'Windy.com forecast for Mission Peak',
    description: 'Animated wind forecast for Mission Peak',
    link: 'https://www.windy.com/?37.567,-122.053,11',
    linkText: 'Windy.com',
    visualContentUrl: 'https://embed.windytv.com/embed2.html?lat=37.567&amp;lon=-122.053&amp;zoom=11&amp;level=surface&amp;overlay=wind&amp;menu=&amp;message=&amp;marker=&amp;forecast=24&amp;calendar=in&amp;location=coordinates&amp;type=map&amp;actualGrid=&amp;metricWind=mph&amp;metricTemp=%C2%B0F',
    additionalContent: ''
  },
  windyForcastMtDiablo: {
    type: 'iFrame',
    title: 'Windy.com forecast for Mount Diablo',
    description: 'Animated wind forecast for Mount Diablo',
    link: 'https://www.windy.com/?37.861,-121.965,10',
    linkText: 'Windy.com',
    visualContentUrl: 'https://embed.windytv.com/embed2.html?lat=37.861&amp;lon=-122.965&amp;zoom=10&amp;level=surface&amp;overlay=wind&amp;menu=&amp;message=&amp;marker=&amp;forecast=24&amp;calendar=in&amp;location=coordinates&amp;type=map&amp;actualGrid=&amp;metricWind=mph&amp;metricTemp=%C2%B0F',
    additionalContent: ''
  },

  oaklandSounding: {
    type: 'image',
    title: 'Oakland Sounding',
    description: 'National Weather Service Sounding Page',
    link: 'https://www.spc.noaa.gov/exper/sounding',
    linkText: 'NOAA NWS Soundings',
    visualContentUrl: 'http://topaflyers.com/weather/soundings/oak.png',
    additionalContent: 'This is a modified skew-t from http://topaflyers.com'
  },
  vandenbergSounding: {
    type: 'image',
    title: 'Vandenberg Sounding',
    description: 'National Weather Service Sounding Page',
    link: 'https://www.spc.noaa.gov/exper/sounding',
    linkText: 'NOAA NWS Soundings',
    visualContentUrl: 'http://topaflyers.com/weather/soundings/vbg.png',
    additionalContent: 'This is a modified skew-t from http://topaflyers.com'
  },
  fogTodayforecast: {
    type: 'image',
    title: 'Fog forecast from fog.today',
    description: 'Satelite images and animations for the current fog conditions',
    link: 'https://fog.today/',
    linkText: 'Fog.today',
    visualContentUrl: 'https://fog.today/current.jpg',
    additionalContent: ''
  },
  nwsBayAreaDiscission: {
    type: 'iFrame',
    title: 'NWS Area Forcast Discussion',
    description: '',
    link: 'https://forecast.weather.gov/product.php?site=NWS&issuedby=mtr&product=AFD&format=CI&glossary=1',
    linkText: 'NWS Area Forcast Discussion',
    visualContentUrl: 'https://forecast.weather.gov/product.php?site=NWS&issuedby=mtr&product=AFD&format=CI&glossary=1&cacheBuster=$CACHE_BUSTER$',
    additionalContent: ''
  },
  kellysCoveWebcam: { //this stopped working
    type: 'iFrame',
    title: 'Ocean Beach Webcam',
    description: 'Ocean Beach (Kelly\'s Cove) live webcam',
    link: 'http://ob-kc.com/',
    linkText: 'Ocean Beach (Kelly\'s Cove) live webcam',
    visualContentUrl: 'https://v.angelcam.com/iframe?v=91lx8g0gyo&amp;token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb21haW4iOiJvYi1rYy5jb20iLCJjYW1lcmFfaWQiOjc0ODY4LCJleHAiOjE1OTgyMDkzNTZ9.Wn1BzRcixBjsHzx9gaCXG7k0H81xa-wYNevzPsz9_aI',
    additionalContent: ''
  },
  cheetahLauchCam: {
    type: 'iFrame',
    title: 'Live Mussel Rock (Cheetah)',
    description: 'Live Mussel Rock, Cheetah lauch camera',
    link: 'https://www.youtube.com/watch?feature=youtu.be&v=L6e1EEA-dQI',
    linkText: 'See Mussel Rock (The Dumps) - Cheetah launch on Youtube',
    visualContentUrl: 'https://www.youtube.com/embed/L6e1EEA-dQI',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;',
    additionalContent: ''
  },
  pacificaPierCam: {
    type: 'iFrame',
    title: 'Live Pacifica Pier',
    description: 'Live Pacifica Pier Camera',
    link: 'https://www.youtube.com/watch?v=zYi_5AF6B2A',
    linkText: 'See the Pacifica Pier on Youtube',
    visualContentUrl: 'https://www.youtube.com/embed/zYi_5AF6B2A',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;',
    additionalContent: ''
  },
  moriPointCam: {
    type: 'iFrame',
    title: 'Live Mori Point Pacifica',
    description: 'Live Mori Point Pacifica Camera',
    link: 'https://www.youtube.com/embed/8gkxC22E-sY',
    linkText: 'See the Mori Point camera on Youtube',
    visualContentUrl: 'https://www.youtube.com/embed/8gkxC22E-sY',
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;',
    additionalContent: ''
  },
  // tides
  tidesPacifica: {
    type: 'image',
    title: 'Tide forecast for Pacifica',
    description: 'Weekly tide forecast for Linda Mar Beach, Pacifica.',
    link: 'http://www.surf-forecast.com/breaks/Linda-Mar-1/tides/latest',
    linkText: 'Pacifica tide table',
    visualContentUrl: 'http://www.surf-forecast.com/tides/Pacifica.png?cacheBuster=$CACHE_BUSTER$',
    additionalContent: ''
  },
  tidesStinson: {
    type: 'image',
    title: 'Tide forecast for Stinson Beach and Bolinas',
    description: 'Weekly tide forecast for Bolinas Lagoon California.',
    link: 'https://www.surf-forecast.com/breaks/Stinson-Beach/tides/latest',
    linkText: 'Stinson / Bolinas tide table',
    visualContentUrl: 'https://www.surf-forecast.com/tides/Bolinas-Lagoon-California.png?cacheBuster=$CACHE_BUSTER$',
    additionalContent: ''
  },
  windSlammerMission: {
    type: 'iFrame',
    title: 'Mission Peak Live Weather',
    description: 'Looking SW from Mission Peak',
    link: 'http://windslammer.hang-gliding.com/WindSlammer/',
    linkText: 'WindSlammer Mission Peak',
    visualContentUrl: 'http://windslammer.hang-gliding.com/WindSlammer/',
    additionalContent: ''
  },
  missionPeakLiveCam: {
    type: 'iFrame',
    title: 'Mission Peak Live Camera',
    description: 'Looking up to mission peak',
    link: 'http://missionpeak.axiscam.net:1920/view/view.shtml?id=5783&imagepath=%2Fmjpg%2Fvideo.mjpg&size=1&streamprofile=MJPEG_800x450_60comp_1fps',
    linkText: 'Live Mission Peak camera',
    visualContentUrl: 'http://missionpeak.axiscam.net:1920/view/view.shtml?id=5783&imagepath=%2Fmjpg%2Fvideo.mjpg&size=1&streamprofile=MJPEG_800x450_60comp_1fps',
    additionalContent: ''
  }
}
//<iframe width="560" height="315" src="https://www.youtube.com/embed/L6e1EEA-dQI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



export default modalContent;
