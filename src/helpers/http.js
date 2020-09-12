import axios from 'axios';
import env from '../configs/env';

const http = axios.create({
  baseURL: env.API_BASE_URL,
});

export default http;
