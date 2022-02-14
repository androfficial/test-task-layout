import { Dispatch } from 'redux';

import usersAPI from '../../api/api';
import {
  IGetUsers,
  IGetUsersPositions,
  TUsersAction,
  Types,
} from '../../types/users';

export const setUsers = (data: IGetUsers, update: boolean): TUsersAction => ({
  type: Types.SET_USERS,
  payload: { data, update },
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

export const setIsSubmitting = (payload: boolean): TUsersAction => ({
  type: Types.SET_IS_SUBMITTING,
  payload,
});

export const setShowModal = (payload: boolean): TUsersAction => ({
  type: Types.SET_SHOW_MODAL,
  payload,
});

export const setFormErrors = (payload: any): TUsersAction => ({
  type: Types.SET_FORM_ERRORS,
  payload,
});

type TUsersDispatch = Dispatch<TUsersAction>;

export const fetchUsers =
  (page = 1, count = 9, update = false) =>
  async (dispatch: TUsersDispatch) => {
    const response = await usersAPI.getUsers(page, count);
    dispatch(setUsers(response, update));
  };

export const fetchUserPositions = () => async (dispatch: TUsersDispatch) => {
  const response = await usersAPI.getUserPositions();
  dispatch(setUserPositions(response));
};

export const fetchUser =
  (userData: FormData) => async (dispatch: TUsersDispatch) => {
    dispatch(setIsSubmitting(true));
    const response = await usersAPI.getToken();
    const newUser = await usersAPI.getNewUser(userData, response.token);
    if (newUser.success) {
      dispatch(setIsSubmitting(false));
      dispatch(setShowModal(true));
      dispatch(setIsUserRegistered(true));
    } else {
      dispatch(setIsSubmitting(false));
      dispatch(setFormErrors(newUser.data));
    }
  };
