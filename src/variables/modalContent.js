
const modalContent = {
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
  windyforecast: {
    type: 'iFrame',
    title: 'Windy.com forecast for the San Francisco Bay Area',
    description: 'Animated wind forecast for the San Francisco Bay Area',
    link: 'https://www.windy.com/?37.762,-122.683,8',
    linkText: 'Windy.com',
    visualContentUrl: 'https://embed.windytv.com/embed2.html?lat=37.753&amp;lon=-122.802&amp;zoom=9&amp;level=surface&amp;overlay=wind&amp;menu=&amp;message=&amp;marker=&amp;forecast=24&amp;calendar=in&amp;location=coordinates&amp;type=map&amp;actualGrid=&amp;metricWind=mph&amp;metricTemp=%C2%B0F',
    additionalContent: ''
  },
  fogTodayforecast: {
    type: 'image',
    title: 'Fog forecast from fog.today',
    description: 'Satelite images and animations for the current fog conditions',
    link: 'https://fog.today/',
    linkText: 'Fog.today',
    visualContentUrl: 'https://fog.today/current.jpg?cacheBuster=$CACHE_BUSTER$',
    additionalContent: ''
  },
  tidesPacifica: {
    type: 'image',
    title: 'Tide forecast for Pacifica',
    description: 'Weekly tide forecast for Linda Mar Beach, Pacifica.',
    link: 'http://www.surf-forecast.com/breaks/Linda-Mar-1/tides/latest',
    linkText: 'Pacifica tide table',
    visualContentUrl: 'http://www.surf-forecast.com/tides/Pacifica.png?cacheBuster=$CACHE_BUSTER$',
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
  kellysCoveWebcam: { //I thing this stopped working
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
}
//<iframe width="560" height="315" src="https://www.youtube.com/embed/L6e1EEA-dQI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



export default modalContent;
