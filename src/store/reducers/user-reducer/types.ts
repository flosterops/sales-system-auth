import { IError } from 'models/requests';

export interface IUserState {
  auth: { accessToken: string | null; refreshToken: string | null } | {};
  error: IError | null;
}
