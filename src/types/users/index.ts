export enum Types {
  SET_USERS = 'USERS@SET:USERS',
  SET_USER_POSITIONS = 'USERS@SET:USER_POSITIONS',
  SET_IS_USER_REGISTERED = 'USERS@SET:IS_USER_REGISTERED',
  SET_IS_LOADED = 'USERS@SET:IS_LOADED',
  SET_IS_SUBMITTED = 'USERS@SET:IS_SUBMITTED',
  SET_SHOW_MODAL = 'USERS@SET:SHOW_MODAL',
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
  update?: boolean;
}

export interface IUserPositions {
  id: number;
  name: string;
}

export interface IGetUsersPositions {
  positions: IUserPositions[];
  success: boolean;
}

export interface ISetUsersAction {
  type: Types.SET_USERS;
  payload: IGetUsers;
}

export interface ISetUserPositionsAction {
  type: Types.SET_USER_POSITIONS;
  payload: IGetUsersPositions;
}

export interface ISetIsUserRegisteredAction {
  type: Types.SET_IS_USER_REGISTERED;
  payload: boolean;
}

export interface ISetIsLoadedAction {
  type: Types.SET_IS_LOADED;
  payload: boolean;
}

export interface ISetIsSubmittedAction {
  type: Types.SET_IS_SUBMITTED;
  payload: boolean;
}

export interface ISetShowModalAction {
  type: Types.SET_SHOW_MODAL;
  payload: boolean;
}

export interface ISetErrorApiAction {
  type: Types.SET_ERROR_API;
  payload: boolean;
}

export type TUsersAction =
  | ISetUsersAction
  | ISetUserPositionsAction
  | ISetIsUserRegisteredAction
  | ISetIsLoadedAction
  | ISetIsSubmittedAction
  | ISetShowModalAction
  | ISetErrorApiAction;
