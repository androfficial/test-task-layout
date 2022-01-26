import { combineReducers } from 'redux';

import users from './users';

export const rootReducers = combineReducers({
  users,
});

export type RootState = ReturnType<typeof rootReducers>;
