import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.weather.com/v2/pws/observations',
  params: {
    apiKey: '6532d6454b8aa370768e63d6ba5a832e',
    numericPrecision: 'decimal',
    format: 'json',
    units: 'e'
  }
});
