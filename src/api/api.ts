import axios, { AxiosError } from 'axios';

import { IGetToken } from '../types/token';
import { IGetNewUser, IGetUsers, IGetUsersPositions } from '../types/users';
import { handleError } from './config';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
});

const usersAPI = {
  async getUsers(page: number, count: number) {
    const { data } = await instance.get<IGetUsers>(
      `/users?page=${page}&count=${count}`
    );

    return data;
  },
  async getUserPositions() {
    const { data } = await instance.get<IGetUsersPositions>('/positions');

    return data;
  },
  async getToken() {
    const { data } = await instance.get<IGetToken>('/token');

    return data;
  },
  async getNewUser(userData: FormData, token: string) {
    try {
      const { data } = await instance.post<IGetNewUser>('/users', userData, {
        headers: { Token: token, 'content-type': 'multipart/form-data' },
      });

      return {
        success: data.success,
        data,
      };
    } catch (error: unknown | AxiosError) {
      return handleError(error);
    }
  },
};

export default usersAPI;
