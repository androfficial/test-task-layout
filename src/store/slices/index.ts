import { combineReducers } from '@reduxjs/toolkit';

import usersSliceReducer from './usersSlice';

export const rootReducer = combineReducers({
  users: usersSliceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
