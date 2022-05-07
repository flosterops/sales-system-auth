import React, { ReactElement } from 'react';
import { ITableColumns, ITableDataSource } from 'models/table';
import { isFunction } from 'models/guards';
import { colors } from 'styles/colors';
import { ISpaceTypes } from 'models/layout';
import { TableRow, TableTd, TableWrapper, THeadTitle } from './styles';
import { TableFilters } from './TableFilters';

interface ITable extends ISpaceTypes {
  columns: ITableColumns[];
  dataSource: ITableDataSource[];
}

const Table = ({ columns, dataSource, ...props }: ITable): ReactElement => {
  const isHasFilters = columns.some(
    ({ filterRender }: ITableColumns): boolean => !!filterRender,
  );

  return (
    <TableWrapper {...props}>
      <thead>
        <TableRow borderColor={colors.primary}>
          {columns.map(
            (col: ITableColumns): ReactElement => (
              <THeadTitle key={col.id}>
                {isFunction(col.title) ? col.title(col) : col.title}
              </THeadTitle>
            ),
          )}
        </TableRow>
      </thead>
      <tbody>
        {isHasFilters && <TableFilters columns={columns} />}
        {dataSource.map((data: ITableDataSource): ReactElement => {
          if (!('id' in data)) {
            console.error("Source data hasn't id field. It's required");
          }
          return (
            <TableRow key={data.id} borderColor={colors.border}>
              {columns.map(({ key, render }: ITableColumns): ReactElement => {
                if (!(key in data)) {
                  console.error(`dataSource doesn't have key of ${key} in columns`);
                }
                return (
                  <TableTd key={`${data.id}_${key}`}>
                    {isFunction(render) ? render(data[key], data) : data[key]}
                  </TableTd>
                );
              })}
            </TableRow>
          );
        })}
      </tbody>
    </TableWrapper>
  );
};

export { Table };
