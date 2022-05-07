import { ReactElement } from 'react';

export interface ITableColumns {
  id: string;
  key: string;
  title: string | ((props: any) => ReactElement);
  render?: (text: string | number | boolean, props: any) => ReactElement;
  filterRender?: (key: string) => ReactElement;
}

export interface ITableDataSource {
  id: string;
  [key: string]: any;
}
