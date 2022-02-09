import axios, { AxiosError } from 'axios';

import { IGetNewUser } from '../types/newUser';
import { IGetToken } from '../types/token';
import { IGetUsers, IGetUsersPositions } from '../types/users';

const instance = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
});

const handleError = (error: unknown | AxiosError) => {
  if (axios.isAxiosError(error)) {
    console.error(error.response);
    return {
      success: error.response?.data.success,
      message: error.response?.data.message,
    };
  }
  console.error(error);
  return {
    success: false,
    message: error,
  };
};

const usersAPI = {
  async getUsers(page: number, count: number) {
    try {
      const { data } = await instance.get<IGetUsers>(
        `/users?page=${page}&count=${count}`
      );

      console.log(data);

      return data;
    } catch (error: unknown | AxiosError) {
      return handleError(error);
    }
  },
  async getUserPositions() {
    try {
      const { data } = await instance.get<IGetUsersPositions>('/positions');

      return data;
    } catch (error: unknown | AxiosError) {
      return handleError(error);
    }
  },
  async getToken() {
    try {
      const { data } = await instance.get<IGetToken>('/token');

      return data;
    } catch (error: unknown | AxiosError) {
      return handleError(error);
    }
  },
  async getNewUser(userData: FormData, token: string) {
    try {
      const { data } = await instance.post<IGetNewUser>('/users', userData, {
        headers: { Token: token, 'content-type': 'multipart/form-data' },
      });

      return data;
    } catch (error: unknown | AxiosError) {
      return handleError(error);
    }
  },
};

export default usersAPI;
