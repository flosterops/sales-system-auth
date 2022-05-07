import { request } from 'helpers/request';
import { urls } from 'helpers/urls';
import { IApplicationResponse } from 'models/user-apps';
import { IApplication } from 'models/applications';
import { IResponseError, TResponse } from 'models/requests';
import { isError } from 'models/guards';

export const userAppsResponseParser = (applications: IApplicationResponse[]): IApplication[] =>
  applications.map(
    (app: IApplicationResponse): IApplication => ({
      id: app.id,
      name: app.displayName.charAt(0).toUpperCase(),
      description: app.displayName,
      key: app.key,
    }),
  );

export const fetchUserApps = async (
  token: string,
): Promise<IApplication[] | IResponseError> => {
  const { data } = await request.get<TResponse<IApplicationResponse[]>>(urls.userApps(), {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (isError(data)) {
    return data;
  }

  return userAppsResponseParser(data.data);
};
