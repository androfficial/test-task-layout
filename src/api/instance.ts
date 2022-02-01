import axios from 'axios';

import { API_ROOT } from './api';

export const instance = axios.create({
  baseURL: API_ROOT,
});
