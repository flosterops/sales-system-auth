import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { login } from 'requests/login';
import { IError, ILoginActionOptions } from 'models/requests';
import Cookies from 'js-cookie';
import { ECookiesTypes } from 'models/cookies';
import { ILoginData } from 'models/login-request';
import { AxiosError } from 'axios';
import { setCookie } from 'helpers/set-cookie';
import { IUserState } from './types';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (options: ILoginActionOptions, { rejectWithValue }) => {
    try {
      const data = await login(options);
      const { accessToken, refreshToken } = data as ILoginData;
      if (options.remember) {
        setCookie(ECookiesTypes.accessToken, accessToken);
        setCookie(ECookiesTypes.refreshToken, refreshToken);
      }
      return { accessToken, refreshToken };
    } catch (e: any) {
      const error: AxiosError<IError> = e;
      if (!error.response) {
        throw e;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const getAuthFromCookiesAction = (state: IUserState) => {
  const accessToken = Cookies.get(ECookiesTypes.accessToken) || null;
  const refreshToken = Cookies.get(ECookiesTypes.refreshToken) || null;
  state.auth = { accessToken, refreshToken };
};

export const setUserErrorAction = (
  state: IUserState,
  action: PayloadAction<IError | null>,
) => {
  state.error = action.payload;
};
