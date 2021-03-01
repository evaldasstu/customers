import React from 'react';

// Custom table headers and cells

const CustomHeader = (props, alignRight) => {
  return (
    <span className={alignRight && 'flex-grow-1 text-right'}>
      {props.children}
    </span>
  );
};

const CustomCell = (props, alignRight) => {
  return (
    <span className={alignRight && 'd-inline-block w-100 text-right'}>
      {props.children}
    </span>
  );
};

const Coordinates = ({ lat, lng }) => {
  return (
    <>
      {lat && (
        <a
          href={`https://www.google.com/maps/place/${lat},${lng}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {lat}, {lng}
        </a>
      )}
    </>
  );
};

const Actions = ({ onEditClicked, onDeleteClicked, customer }) => {
  return (
    <>
      <span
        className="btn btn-link align-baseline p-0 mr-3"
        onClick={() => onEditClicked(customer)}
        role="link"
        tabIndex="0"
      >
        Edit
      </span>
      <span
        className="btn btn-link align-baseline p-0 text-danger"
        onClick={() => onDeleteClicked(customer)}
        role="link"
        tabIndex="0"
      >
        Delete
      </span>
    </>
  );
};

// Set up grid columns. Accessor means "key".

export const columnSetup = ({ onEditClicked, onDeleteClicked }) => {
  return [
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
  ];
};
