export enum EAppKeyTypes {
  admin = 'ADMIN',
  salma = 'SALMA',
}

export interface IApplication {
  id: string;
  name: string;
  description: string;
  key: EAppKeyTypes;
}
