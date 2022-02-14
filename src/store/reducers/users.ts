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
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  pageSize: 0,
  links: {} as IGetUsersLinks,
  isUserRegistered: false,
  isLoaded: false,
  isSubmitting: false,
  showModal: false,
  formErrors: {
    success: true,
    message: '',
    fails: {},
  },
};

type TUsersInitialState = typeof initialState;

const users = (
  state = initialState,
  action: TUsersAction
): TUsersInitialState => {
  switch (action.type) {
    case Types.SET_USERS: {
      const { data, update } = action.payload;
      const { count, links, page, total_pages, total_users, users } = data;

      return {
        ...state,
        users: update ? [...users] : [...state.users, ...users],
        currentPage: page,
        totalPages: total_pages,
        totalUsers: total_users,
        pageSize: count,
        links,
        isLoaded: true,
      };
    }
    case Types.SET_USER_POSITIONS: {
      const { positions } = action.payload;

      return {
        ...state,
        userPositions: positions,
      };
    }
    case Types.SET_IS_USER_REGISTERED:
      return {
        ...state,
        isUserRegistered: action.payload,
        formErrors: {
          success: true,
          message: '',
          fails: {},
        },
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case Types.SET_SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload,
      };
    case Types.SET_FORM_ERRORS:
      return {
        ...state,
        formErrors: action.payload,
      };
    default:
      return state;
  }
};

export default users;
