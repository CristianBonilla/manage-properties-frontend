import axios from 'axios';

export const PROPERTIES_API = axios.create({
  baseURL: 'https://localhost:5001/api/v1/properties'
});
