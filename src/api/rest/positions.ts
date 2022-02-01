// import { catchError } from 'api/config';
import { instance } from 'api/instance';
import axios, { AxiosError } from 'axios';
import { IGetUsersPositions } from 'types/users';

export const getUsersPosition = async () => {
  try {
    const { data } = await instance.get<IGetUsersPositions>('/positions');

    return data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      // catchError(error);
      return false;
    }
    console.error(error);
    return false;
  }
};
