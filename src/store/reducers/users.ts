/* eslint-disable default-param-last */

import {
  IGetUsersLinks,
  ISetUsers,
  IUserPositions,
  TUsersAction,
  Types,
} from '../../types/users';

const initialState = {
  users: [] as ISetUsers[],
  userPositions: [] as IUserPositions[],
  isUserRegistered: false,
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  pageSize: 0,
  links: {} as IGetUsersLinks,
  isLoaded: false,
  showModal: false,
  success: false,
};

type TUsersInitialState = typeof initialState;

const users = (
  state = initialState,
  action: TUsersAction
): TUsersInitialState => {
  switch (action.type) {
    case Types.SET_USERS: {
      const {
        count,
        links,
        page,
        success,
        total_pages,
        total_users,
        users,
        update,
      } = action.payload;

      return {
        ...state,
        users: update ? [...users] : [...state.users, ...users],
        currentPage: page,
        totalPages: total_pages,
        totalUsers: total_users,
        pageSize: count,
        links,
        isLoaded: true,
        success,
      };
    }
    case Types.SET_USER_POSITIONS: {
      const { positions, success } = action.payload;

      return {
        ...state,
        userPositions: positions,
        success,
      };
    }
    case Types.SET_IS_USER_REGISTERED:
      return {
        ...state,
        isUserRegistered: action.payload,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case Types.SET_ERROR_API:
      return {
        ...state,
        success: action.payload,
      };
    default:
      return state;
  }
};

export default users;
