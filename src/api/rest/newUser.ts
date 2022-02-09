// import { catchError } from 'api/config';
import { API_ROOT } from 'api/api';
import axios, { AxiosError } from 'axios';
import { IGetNewUser } from 'types/newUser';

export const getNewUser = async (userData: FormData, token: string) => {
  try {
    const { data } = await axios.post<IGetNewUser>(
      `${API_ROOT}/users`,
      userData,
      {
        headers: { Token: token },
      }
    );

    console.log(data);
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
