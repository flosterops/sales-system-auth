import { request } from 'helpers/request';
import { urls } from 'helpers/urls';
import { getBearerAuthorizationToken } from 'helpers/token';

export const changePassword = async (
  password: string,
  confirmPassword: string,
  token: string,
): Promise<{}> => {
  try {
    const { data } = await request.post<{}>(
      urls.changePassword(),
      { password, confirmPassword },
      {
        headers: {
          Authorization: getBearerAuthorizationToken(token),
        },
      },
    );

    return data;
  } catch (e: any) {
    throw new Error(e.message);
  }
};
