// Template components for custom table header and cell rendering
import React from 'react';

export const CustomHeader = (props, alignRight) => {
  return (
    <span className={alignRight && 'flex-grow-1 text-right'}>
      {props.children}
    </span>
  );
};

export const CustomCell = (props, alignRight) => {
  return (
    <span className={alignRight && 'd-inline-block w-100 text-right'}>
      {props.children}
    </span>
  );
};

export const Coordinates = ({ lat, lng }) => {
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

export const Actions = ({ onEditClicked, onDeleteClicked, customer }) => {
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
