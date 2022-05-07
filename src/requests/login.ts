import { IError, ILoginOptions } from 'models/requests';
import { request } from 'helpers/request';
import { urls } from 'helpers/urls';
import { ILoginData, ILoginResponse } from 'models/login-request';
import { BASIC_AUTHORIZATION_TOKEN } from 'helpers/token';
import { lowDashToCamelCase } from 'helpers/response-parser';

export const login = async (options: ILoginOptions): Promise<ILoginData | IError> => {
  const query = new URLSearchParams({
    scope: 'read',
    grant_type: 'password',
    password: options.password,
    username: options.email,
  });
  const headers = { Authorization: BASIC_AUTHORIZATION_TOKEN };
  const { data } = await request.post<ILoginResponse>(
    urls.login(`?${query.toString()}`),
    null,
    {
      headers,
    },
  );

  return lowDashToCamelCase<ILoginData | IError>(data);
};
