export enum Types {
  SET_USERS = 'USERS@SET:USERS',
  SET_USER_POSITIONS = 'USERS@SET:USER_POSITIONS',
  SET_IS_USER_REGISTERED = 'USERS@SET:IS_USER_REGISTERED',
  SET_IS_LOADED = 'USERS@SET:IS_LOADED',
  SET_IS_SUBMITTING = 'USERS@SET:IS_SUBMITTING',
  SET_SHOW_MODAL = 'USERS@SET:SHOW_MODAL',
  SET_FORM_ERRORS = 'USERS@SET:FORM_ERRORS',
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

export interface IUserPositions {
  id: number;
  name: string;
}

export interface IGetUsersPositions {
  positions: IUserPositions[];
  success: boolean;
}

export interface IGetNewUser {
  message: string;
  success: boolean;
  user_id: number;
}

export interface ISetUsersAction {
  type: Types.SET_USERS;
  payload: { data: IGetUsers; update: boolean };
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

export interface ISetIsSubmittingAction {
  type: Types.SET_IS_SUBMITTING;
  payload: boolean;
}

export interface ISetShowModalAction {
  type: Types.SET_SHOW_MODAL;
  payload: boolean;
}

export interface ISetFormErrorsAction {
  type: Types.SET_FORM_ERRORS;
  payload: any;
}

export type TUsersAction =
  | ISetUsersAction
  | ISetUserPositionsAction
  | ISetIsUserRegisteredAction
  | ISetIsLoadedAction
  | ISetIsSubmittingAction
  | ISetShowModalAction
  | ISetFormErrorsAction;
