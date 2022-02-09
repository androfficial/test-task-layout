import { getNewUser } from 'api/rest/newUser';
import { getUsersPosition } from 'api/rest/positions';
import { getToken } from 'api/rest/token';
import { getUsers } from 'api/rest/users';
import { Dispatch } from 'redux';
import {
  IGetUsers,
  IGetUsersPositions,
  TUsersAction,
  Types,
} from 'types/users';

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
  (path: string, update = false) =>
  async (dispatch: TUsersDispatch) => {
    const response = await getUsers(path);
    if (response) {
      response.update = update;
      dispatch(setUsers(response));
    } else {
      dispatch(setErrorApi(true));
    }
  };

export const fetchUsersPositions = () => async (dispatch: TUsersDispatch) => {
  const response = await getUsersPosition();
  if (response) {
    dispatch(setUserPositions(response));
  } else {
    dispatch(setErrorApi(true));
  }
};

export const fetchUser =
  (userData: FormData) => async (dispatch: TUsersDispatch) => {
    const token = await getToken();
    if (token) {
      const newUser = await getNewUser(userData, token);
      if (newUser) {
        dispatch(setIsLoaded(true));
        dispatch(setShowModal(true));
        dispatch(setIsUserRegistered(true));
      } else {
        dispatch(setErrorApi(true));
      }
    } else {
      console.error('Не удалось получить токен');
    }
  };
