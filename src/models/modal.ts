export enum EModalTypes {
  appList = 'appList',
}

export interface IModalContext {
  id: EModalTypes | '';
  options: any;
  openModal: (id: EModalTypes | '', options?: any) => void;
  closeModal: () => void;
}
