import React, { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { useTable, useSortBy } from 'react-table';
import './Grid.css';

function Grid({ data }) {
  const columns = useMemo(
    () => [
      {
        accessor: 'name', // accessor is the "key" in the data
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
        Header: 'House no.',
      },
      {
        accessor: 'zip',
        Header: 'Zip code',
      },
      {
        accessor: (original) => `${original.lat}, ${original.lng}`,
        Header: 'Coordinates',
        Cell: ({ row, value }) => (
          <a
            href={`https://www.google.com/maps/place/${row.original.lat},${row.original.lng}`}
            target="_blank"
            rel="noreferrer"
          >
            {value}
          </a>
        ),
      },
      {
        accessor: 'actions',
        disableSortBy: true,
        Cell: ({ row }) => (
          <>
            <span className="btn btn-link align-baseline p-0 mr-4">Edit</span>
            <span className="btn btn-link align-baseline p-0 text-danger">
              Delete
            </span>
          </>
        ),
      },
    ],
    []
  );

  const { headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
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
              {column.render('Header')}
              {column.canSort && (
                <span
                  className={`sort-indicator d-inline-block ml-1 small ${
                    column.isSorted
                      ? column.isSortedDesc
                        ? 'sort-indicator--desc'
                        : 'sort-indicator--asc'
                      : 'sort-indicator--unsorted'
                  } `}
                ></span>
              )}
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
}

export default Grid;
