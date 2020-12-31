import axios from 'axios';
import settings from '../variables/appSettings';

export default axios.create({
  baseURL: settings.weatherBaseUrl,
  params: {
    apiKey: settings.apiKey,
    numericPrecision: 'decimal',
    format: 'json',
    units: 'e'
  }
});
