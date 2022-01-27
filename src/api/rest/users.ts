// import { catchError } from 'api/config';
import axios, { AxiosError } from 'axios';
import { IGetUsers } from 'types/global/users';

export const getUsers = async (path: string) => {
  try {
    const { data } = await axios.get<IGetUsers>(path);

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
