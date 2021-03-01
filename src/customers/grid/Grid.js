import React, { useMemo } from 'react';
import './Grid.css';
import Table from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';
import { Header, Row, Cell } from './GridRenderers';
import {
  CustomHeader,
  CustomCell,
  Coordinates,
  Actions,
} from './GridTemplates';
import compareIgnoreCase from './utils';

const CustomersGrid = ({ customers, onEditClicked, onDeleteClicked }) => {
  const data = useMemo(() => customers, [customers]);

  // Table column setup. Accessor means "key".
  const columns = useMemo(
    () => [
      {
        accessor: 'name',
        Header: 'Full name',
      },
      {
        accessor: 'email',
        Header: 'Email',
        Cell: ({ value }) => <a href={`mailto:${value}`}>{value}</a>,
      },

      {
        accessor: 'city',
        Header: 'City',
      },
      {
        accessor: 'street',
        Header: 'Street',
      },
      {
        accessor: 'house',
        Header: () => <CustomHeader alignRight>House no.</CustomHeader>,
        Cell: ({ value }) => <CustomCell alignRight>{value}</CustomCell>,
      },
      {
        accessor: 'zip',
        Header: () => <CustomHeader alignRight>Zip</CustomHeader>,
        Cell: ({ value }) => <CustomCell alignRight>{value}</CustomCell>,
      },
      {
        accessor: 'coordinates',
        Header: () => <CustomHeader alignRight>Coordinates</CustomHeader>,
        Cell: ({ row }) => (
          <CustomCell alignRight>
            <Coordinates lat={row.original.lat} lng={row.original.lng} />
          </CustomCell>
        ),
      },
      {
        accessor: 'actions',
        disableSortBy: true,
        Cell: ({ row }) => (
          <Actions
            customer={row.original}
            {...{ onEditClicked }}
            {...{ onDeleteClicked }}
          />
        ),
      },
    ],
    [onEditClicked, onDeleteClicked]
  );

  const { headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
      sortTypes: {
        alphanumeric: (row1, row2, columnName) => {
          // Extra step to make sorting case-insensitive 
          return compareIgnoreCase(
            row1.values[columnName],
            row2.values[columnName]
          );
        },
      },
    },
    useSortBy
  );

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((column) => (
            <Header {...{ column }} key={column.id} />
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Row {...{ row }} key={row.id}>
              {row.cells.map((cell) => {
                return <Cell {...{ cell }} key={cell.column.id} />;
              })}
            </Row>
          );
        })}
      </tbody>

      {!data.length && (
        <tfoot>
          <tr>
            <td>No registered customers.</td>
          </tr>
        </tfoot>
      )}
    </Table>
  );
};

export default CustomersGrid;
