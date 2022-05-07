import { ActionReducerMapBuilder, createSlice, Draft } from '@reduxjs/toolkit';
import { NoInfer } from '@reduxjs/toolkit/dist/tsHelpers';
import Cookies from 'js-cookie';
import { ECookiesTypes } from 'models/cookies';
import { IError } from 'models/requests';
import { ILoginData } from 'models/login-request';
import { getAuthFromCookiesAction, loginUser, setUserErrorAction } from './actions';
import { IUserState } from './types';

const initialState = {
  auth: {
    accessToken: Cookies.get(ECookiesTypes.accessToken) || null,
    refreshToken: Cookies.get(ECookiesTypes.refreshToken) || null,
  },
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: { getAuthFromCookies: getAuthFromCookiesAction, setUserError: setUserErrorAction },
  extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IUserState>>) => {
    builder.addCase(loginUser.fulfilled, (state: Draft<IUserState>, action) => {
      state.auth = action.payload as ILoginData;
      state.error = null;
    });
    builder.addCase(loginUser.rejected, (state: Draft<IUserState>, action) => {
      if (action.payload) {
        state.error = action.payload as IError;
      } else {
        state.error = {
          error: 'Serialized error',
          errorDescription: action.error.message || 'Serialized error',
        };
      }
    });
  },
});

export const { getAuthFromCookies, setUserError } = userSlice.actions;
export const userReducer = userSlice.reducer;
