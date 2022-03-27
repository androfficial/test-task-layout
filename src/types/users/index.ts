import { AxiosResponse } from 'axios';

export interface IGetUsersLinks {
  next_url: string | null;
  prev_url: string | null;
}

export interface ISetUsers {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: number;
  registration_timestamp: number;
  photo: string;
}

export interface IGetUsers {
  count: number;
  links: IGetUsersLinks;
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
  users: ISetUsers[];
}

export interface IUserPositions {
  id: number;
  name: string;
}

export interface IGetUsersPositions {
  positions: IUserPositions[];
  success: boolean;
}

export interface IGetToken {
  success: boolean;
  token: string;
}

export interface IGetNewUser {
  message: string;
  success: boolean;
  user_id: number;
}

export interface IFetchUsersProps {
  page: number;
  count: number;
  update?: boolean;
}

export interface IFetchUsersResponse {
  response: AxiosResponse<IGetUsers>;
  update: boolean;
}

export interface INewUserRegisterProps {
  userData: FormData;
}
