import axios, { AxiosResponse } from 'axios';

import {
  IGetNewUser,
  IGetToken,
  IGetUsers,
  IGetUsersPositions,
} from '../types/users';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
});

export const mainAPI = {
  getUsers(page: number, count: number): Promise<AxiosResponse<IGetUsers>> {
    return instance.get<IGetUsers>(`/users?page=${page}&count=${count}`);
  },
  getUserPositions(): Promise<AxiosResponse<IGetUsersPositions>> {
    return instance.get<IGetUsersPositions>('/positions');
  },
  getToken(): Promise<AxiosResponse<IGetToken>> {
    return instance.get<IGetToken>('/token');
  },
  getNewUser(
    userData: FormData,
    token: string
  ): Promise<AxiosResponse<IGetNewUser>> {
    return instance.post<IGetNewUser>('/users', userData, {
      headers: { Token: token, 'content-type': 'multipart/form-data' },
    });
  },
};
