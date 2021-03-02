import React from 'react';

// Presets

const CustomHeader = (props, alignRight) => {
  return (
    <span className={alignRight && 'flex-grow-1 text-right'}>
      {props.children}
    </span>
  );
};

const CustomCell = (props, alignRight) => {
  let className = '';
  if (props.bold) {
    className += 'font-weight-bolder ';
  }
  if (props.alignRight) {
    className += 'd-inline-block w-100 text-right';
  }
  if (props.truncate) {
    className += 'cell-text--truncate ';
  }
  return <span {...{ className }}>{props.children}</span>;
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
        className="btn btn-link align-baseline p-0"
        onClick={() => onEditClicked(customer)}
        role="link"
        tabIndex="0"
      >
        Edit
      </span>
      <span
        className="btn btn-link align-baseline p-0 text-danger ml-3"
        onClick={() => onDeleteClicked(customer)}
        role="link"
        tabIndex="0"
      >
        Delete
      </span>
    </>
  );
};

// Column specification

export const columnSetup = ({ onEditClicked, onDeleteClicked }) => {
  return [
    {
      accessor: 'name',
      Header: 'Full name',
    },
    {
      accessor: 'email',
      Header: 'Email',
      Cell: ({ value }) => (
        <CustomCell truncate>
          <a href={`mailto:${value}`}>{value}</a>
        </CustomCell>
      ),
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
      Header: () => <CustomHeader alignRight>House</CustomHeader>,
      Cell: ({ value }) => <CustomCell alignRight>{value}</CustomCell>,
    },
    {
      accessor: 'zip',
      Header: () => <CustomHeader alignRight>Zip</CustomHeader>,
      Cell: ({ value }) => <CustomCell alignRight>{value}</CustomCell>,
    },
    {
      accessor: 'coordinates',
      Header: () => <CustomHeader alignRight>Location</CustomHeader>,
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
        <CustomCell alignRight>
          <Actions
            customer={row.original}
            {...{ onEditClicked }}
            {...{ onDeleteClicked }}
          />
        </CustomCell>
      ),
    },
  ];
};
