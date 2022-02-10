import { Dispatch } from 'redux';

import usersAPI from '../../api/api';
import {
  IGetUsers,
  IGetUsersPositions,
  TUsersAction,
  Types,
} from '../../types/users';

export const setUsers = (payload: IGetUsers): TUsersAction => ({
  type: Types.SET_USERS,
  payload,
});

export const setUserPositions = (
  payload: IGetUsersPositions
): TUsersAction => ({
  type: Types.SET_USER_POSITIONS,
  payload,
});

export const setIsUserRegistered = (payload: boolean): TUsersAction => ({
  type: Types.SET_IS_USER_REGISTERED,
  payload,
});

export const setIsLoaded = (payload: boolean): TUsersAction => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setIsSubmitted = (payload: boolean): TUsersAction => ({
  type: Types.SET_IS_SUBMITTED,
  payload,
});

export const setShowModal = (payload: boolean): TUsersAction => ({
  type: Types.SET_SHOW_MODAL,
  payload,
});

export const setErrorApi = (payload: boolean): TUsersAction => ({
  type: Types.SET_ERROR_API,
  payload,
});

type TUsersDispatch = Dispatch<TUsersAction>;

export const fetchUsers =
  (page = 1, count = 9, update = false) =>
  async (dispatch: TUsersDispatch) => {
    const response = await usersAPI.getUsers(page, count);
    if (response.success) {
      response.update = update;
      dispatch(setUsers(response));
    } else {
      dispatch(setErrorApi(true));
    }
  };

export const fetchUserPositions = () => async (dispatch: TUsersDispatch) => {
  const response = await usersAPI.getUserPositions();
  if (response) {
    dispatch(setUserPositions(response));
  } else {
    dispatch(setErrorApi(true));
  }
};

export const fetchUser =
  (userData: FormData) => async (dispatch: TUsersDispatch) => {
    dispatch(setIsSubmitted(true));
    const response = await usersAPI.getToken();
    if (response.success) {
      const newUser = await usersAPI.getNewUser(userData, response.token);
      if (newUser.success) {
        dispatch(setIsSubmitted(false));
        dispatch(setShowModal(true));
        dispatch(setIsUserRegistered(true));
      } else {
        dispatch(setIsSubmitted(false));
        dispatch(setErrorApi(true));
      }
    }
  };
