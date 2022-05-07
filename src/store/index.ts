import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducers';

export type TStore = ReturnType<typeof RootReducer>;

export const prepareStore = () =>
  configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
  });
