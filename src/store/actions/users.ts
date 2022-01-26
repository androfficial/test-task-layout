import { DEFAULT_USERS_PATH } from 'api/api';
import { getUsers } from 'api/rest/users';
import { Dispatch } from 'redux';
import { IGetUsers, TUsersAction, Types } from 'types/global/game';

export const setUsers = (payload: IGetUsers): TUsersAction => ({
  type: Types.SET_USERS,
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
