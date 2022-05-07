export const urls = {
  login: (query: string): string => `/oauth/token${query}`,
  changePassword: (): string => '/change-password',
  resetPassword: (): string => '/reset-password',
  resetPasswordByToken: (token: string): string => `/reset-password/${token}`,
  userApps: (): string => '/user/apps',
};
