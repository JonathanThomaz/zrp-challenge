import axios, { AxiosInstance } from 'axios';
import { accessEnv } from 'helpers/accessEnv';

const instance: AxiosInstance = axios.create({
  baseURL: accessEnv<string>('REACT_APP_API_ENDPOINT', 'http://localhost:3333'),
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
  }
});

export default instance;
