/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';

import { mainAPI } from '../../api/api';
import {
  IFailsRequest,
  IFetchUsersProps,
  IFetchUsersResponse,
  IFormErrors,
  IGetUsersLinks,
  IGetUsersPositions,
  INewUserRegisterProps,
  ISetUsers,
  IUserPositions,
} from '../../types/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (payload: IFetchUsersProps, { rejectWithValue }) => {
    const { page = 1, count = 6, update = false } = payload;

    try {
      const response = await mainAPI.getUsers(page, count);

      return {
        response,
        update,
      };
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response);
      }

      return rejectWithValue(error);
    }
  }
);

export const fetchUserPositions = createAsyncThunk(
  'users/fetchUserPositions',
  async (_, { rejectWithValue }) => {
    try {
      return await mainAPI.getUserPositions();
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response);
      }

      return rejectWithValue(error);
    }
  }
);

export const newUserRegister = createAsyncThunk(
  'users/newUserRegister',
  async (payload: INewUserRegisterProps, { rejectWithValue }) => {
    const { userData } = payload;

    try {
      const { data } = await mainAPI.getToken();

      return await mainAPI.getNewUser(userData, data.token);
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response);
      }

      return rejectWithValue(error);
    }
  }
);

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
    fails: [],
  } as IFormErrors,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
  },
  extraReducers: {
    [fetchUsers.pending.type]: (state) => {
      state.isLoaded = false;
    },
    [fetchUsers.fulfilled.type]: (
      state,
      action: PayloadAction<IFetchUsersResponse>
    ) => {
      const { response, update } = action.payload;
      const { count, links, page, total_pages, total_users, users } =
        response.data;

      state.users = update ? [...users] : [...state.users, ...users];
      state.currentPage = page;
      state.totalPages = total_pages;
      state.totalUsers = total_users;
      state.pageSize = count;
      state.links = links;
      state.isLoaded = true;
    },
    [fetchUserPositions.fulfilled.type]: (
      state,
      action: PayloadAction<AxiosResponse<IGetUsersPositions>>
    ) => {
      const { data } = action.payload;

      state.userPositions = data.positions;
    },
    [newUserRegister.pending.type]: (state) => {
      state.isSubmitting = true;
      state.isUserRegistered = false;
    },
    [newUserRegister.fulfilled.type]: (state) => {
      state.isSubmitting = false;
      state.showModal = true;
      state.isUserRegistered = true;
      state.formErrors = {
        success: true,
        message: '',
        fails: [],
      };
    },
    [newUserRegister.rejected.type]: (
      state,
      action: PayloadAction<AxiosResponse<IFailsRequest>>
    ) => {
      const { data } = action.payload;
      const errorsReceived: string[] = [];

      for (const key in data.fails) {
        data.fails[key].map((el: string) => errorsReceived.push(el));
      }

      state.isSubmitting = false;
      state.formErrors = {
        ...data,
        fails: errorsReceived,
      };
    },
  },
});

export const { setShowModal } = usersSlice.actions;

export default usersSlice.reducer;
