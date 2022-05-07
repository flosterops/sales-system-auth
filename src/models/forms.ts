import { FormikValues } from 'formik';

export type TFieldTypes = EFieldTypes | EInputTypes;

export enum EFieldTypes {
  select = 'select',
  checkbox = 'checkbox',
}

export enum EInputTypes {
  text = 'text',
  number = 'number',
  search = 'search',
  email = 'email',
  password = 'password',
}

export interface IInitialFormValues {
  login: IInitialLoginFormValues;
  forgotPassword: IInitialForgotPasswordFormValues;
  resetPassword: IInitialResetPasswordFormValues;
  selectApp: IInitialSelectAppFormValues;
}

export interface IInitialSelectAppFormValues {
  search: string;
  application: string;
}

export interface IInitialForgotPasswordFormValues {
  email: string;
}

export interface IInitialLoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export interface IInitialResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export type IValidationFunction = (values: FormikValues) => string;

export interface IFormValidations {
  [key: string]: IValidationFunction[];
}

export enum SelectMenuPlacement {
  default = 'auto',
  bottom = 'bottom',
  top = 'top',
}

export interface ISelectStyleOptions {
  color: string;
}
