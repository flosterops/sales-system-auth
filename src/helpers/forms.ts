import { IInitialFormValues, IInitialLoginFormValues } from 'models/forms';

export const initialLoginFormValues: IInitialLoginFormValues = {
  email: '',
  password: '',
  remember: false,
};

export const initialForgotPasswordFormValues = {
  email: '',
};

export const initialResetPasswordFormValues = {
  password: '',
  confirmPassword: '',
};

export const initialSelectAppFormValues = {
  search: '',
  application: '',
};

export const initialFormValues: IInitialFormValues = {
  login: initialLoginFormValues,
  forgotPassword: initialForgotPasswordFormValues,
  resetPassword: initialResetPasswordFormValues,
  selectApp: initialSelectAppFormValues,
};
