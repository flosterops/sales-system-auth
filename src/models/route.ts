export interface IPageBuilderConfig {
  id: string;
  componentType: EPageComponentTypes;
  route: ERouteLinks;
  routeType: ERouteTypes;
  exact: boolean;
  redirect: ERouteLinks | null;
}

export enum ERouteLinks {
  login = '/login',
  forgotPassword = '/forgot-password',
  resetPassword = '/reset-password',
  emailConfirmation = '/email-confirmation',
  dashboard = '/dashboard',
  admin = '/admin',
}

export enum EPageComponentTypes {
  LoginPage = 'LoginPage',
  ForgotPassword = 'ForgotPassword',
  ResetPassword = 'ResetPassword',
  EmailConfirmation = 'EmailConfirmation',
}

export enum ERouteTypes {
  public = 'public',
  private = 'private',
}
