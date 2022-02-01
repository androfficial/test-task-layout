import { DEFAULT_USERS_PATH } from 'api/api';
import { getUsersPosition } from 'api/rest/positions';
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

export const setUsersPositions = (
  payload: IGetUsersPositions
): TUsersAction => ({
  type: Types.SET_USERS_POSITIONS,
  payload,
});

export const setIsLoaded = (payload: boolean): TUsersAction => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean): TUsersAction => ({
  type: Types.SET_ERROR_API,
  payload,
});

type TUsersDispatch = Dispatch<TUsersAction>;

export const fetchUsers =
  (path = DEFAULT_USERS_PATH) =>
  async (dispatch: TUsersDispatch) => {
    const response = await getUsers(path);
    if (response) {
      dispatch(setUsers(response));
    } else {
      dispatch(setErrorApi(true));
    }
  };

export const fetchUsersPositions = () => async (dispatch: TUsersDispatch) => {
  const response = await getUsersPosition();
  if (response) {
    dispatch(setUsersPositions(response));
  } else {
    dispatch(setErrorApi(true));
  }
};
