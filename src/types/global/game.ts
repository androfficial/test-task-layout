export enum Types {
  SET_USERS = 'USERS@SET:USERS',
  SET_IS_LOADED = 'USERS@SET:IS_LOADED',
  SET_ERROR_API = 'USERS@SET:ERROR_API',
}

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

export interface ISetUsersAction {
  type: Types.SET_USERS;
  payload: IGetUsers;
}

export interface ISetIsLoadedAction {
  type: Types.SET_IS_LOADED;
  payload: boolean;
}

export interface ISetErrorApiAction {
  type: Types.SET_ERROR_API;
  payload: boolean;
}

export type TUsersAction =
  | ISetUsersAction
  | ISetIsLoadedAction
  | ISetErrorApiAction;
