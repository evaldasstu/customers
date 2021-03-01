// Grid data rendering
import React from 'react';

export const Header = ({ column }) => {
  return (
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
  );
};

export const Row = (props) => {
    return (<tr>{props.children}</tr>);
  };

export const Cell = ({ cell }) => {
  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
};
