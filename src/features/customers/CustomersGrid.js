import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';
import './CustomersGrid.css';

export const CustomersGrid = (props) => {
  const customers = useSelector((state) => state.customers);
  const data = useMemo(() => customers, [customers]);

  // Style numeric columns
  const alignRight = useMemo(() => {
    return {
      header: 'flex-grow-1 text-right',
      cell: 'd-inline-block w-100 text-right',
    };
  }, []);

  // Setup table header and cell rendering
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
        Header: () => <span className={alignRight.header}>House no.</span>,
        Cell: ({ value }) => <span className={alignRight.cell}>{value}</span>,
      },
      {
        accessor: 'zip',
        Header: () => <span className={alignRight.header}>Zip</span>,
        Cell: ({ value }) => <span className={alignRight.cell}>{value}</span>,
      },
      {
        id: 'coordinates',
        Header: () => <span className={alignRight.header}>Coordinates</span>,
        Cell: ({ row }) => (
          <span className={alignRight.cell}>
            {row.original.lat && (
              <a
                href={`https://www.google.com/maps/place/${row.original.lat},${row.original.lng}`}
                target="_blank"
                rel="noreferrer"
              >
                {row.original.lat}, {row.original.lng}
              </a>
            )}
          </span>
        ),
      },
      {
        accessor: 'actions',
        disableSortBy: true,
        Cell: ({ row }) => (
          <>
            <span
              className="btn btn-link align-baseline p-0 mr-3"
              onClick={() => props.onEditClicked(row.original.id)}
            >
              Edit
            </span>
            <span
              className="btn btn-link align-baseline p-0 text-danger"
              onClick={() => props.onDeleteClicked(row.original.id)}
            >
              Delete
            </span>
          </>
        ),
      },
    ],
    [props, alignRight]
  );

  // Case-insensitive sorting
  const compareIgnoreCase = (a, b) => {
    let r1 = a.toLowerCase();
    let r2 = b.toLowerCase();
    if (r1 < r2) {
      return -1;
    }
    if (r1 > r2) {
      return 1;
    }
    return 0;
  };

  const { headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
      sortTypes: {
        alphanumeric: (row1, row2, columnName) => {
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
            <th
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className="text-nowrap"
            >
              <div className="d-flex align-items-center">
                {column.render('Header')}
                {column.canSort && (
                  <div
                    className={`sort-indicator text-right small ${
                      column.isSorted
                        ? column.isSortedDesc
                          ? 'sort-indicator--desc'
                          : 'sort-indicator--asc'
                        : 'sort-indicator--unsorted'
                    }`}
                  ></div>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
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
