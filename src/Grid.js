import React, { useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';
import './Grid.css';

function Grid(props) {
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
        Header: () => <span className="flex-grow-1 text-right">House no.</span>,
        Cell: ({ value }) => (
          <span className="d-inline-block w-100 text-right">{value}</span>
        ),
      },
      {
        accessor: 'zip',
        Header: () => <span className="flex-grow-1 text-right">Zip</span>,
        Cell: ({ value }) => (
          <span className="d-inline-block w-100 text-right">{value}</span>
        ),
      },
      {
        id: 'coordinates',
        accessor: (original) => `${original.lat}, ${original.lng}`,
        Header: () => (
          <span className="flex-grow-1 text-right">Coordinates</span>
        ),
        Cell: ({ row, value }) => (
          <span className="d-inline-block w-100 text-right">
            <a
              href={`https://www.google.com/maps/place/${row.original.lat},${row.original.lng}`}
              target="_blank"
              rel="noreferrer"
            >
              {value}
            </a>
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
              onClick={() => props.handleEdit(row.index)}
            >
              Edit
            </span>
            <span
              className="btn btn-link align-baseline p-0 text-danger"
                onClick={() => props.handleDelete(row.index)}
            >
              Delete
            </span>
          </>
        ),
      },
    ],
    [props]
  );

  const data = useMemo(
    () => [
      {
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        city: 'Vilnius',
        street: 'Gedimino pr.',
        house: '7',
        zip: '12345',
        lat: '54.68926',
        lng: '25.27542',
      },
      {
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
        city: 'Kaunas',
        street: 'Kęstučio g.',
        house: '14',
        zip: '01234',
        lat: '54.90238',
        lng: '23.93476',
      },
      {
        name: 'Samantha Goldsmith-Longbottom',
        email: 'samantha@longemailindustries.com',
        city: 'San Antonio',
        street: 'Washington Blvd.',
        house: '140',
        zip: '24352',
        lat: '54.90238',
        lng: '23.93476',
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
                    } `}
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
}

export default Grid;
