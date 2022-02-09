// import { catchError } from 'api/config';
import axios, { AxiosError } from 'axios';
import { IGetToken } from 'types/token';

import { API_ROOT } from '../api';

export const getToken = async () => {
  try {
    const { data } = await axios.get<IGetToken>(`${API_ROOT}/token`);

    return data.token;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      // catchError(error);
      return false;
    }
    console.error(error);
    return false;
  }
};
