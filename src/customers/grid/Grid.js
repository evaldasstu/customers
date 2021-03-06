import React, { useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';
import { Header, Row, Cell } from './GridRenderers';
import { columnSetup } from './CellTemplates';
import compareIgnoreCase from './sortHelper';
import './Grid.css';

const CustomersGrid = ({ customers, onEditClicked, onDeleteClicked }) => {
  const data = useMemo(() => customers, [customers]);

  const columns = useMemo(
    () => columnSetup({ onEditClicked, onDeleteClicked }),
    [onEditClicked, onDeleteClicked]
  );

  const { headers, rows, prepareRow } = useTable(
    {
      columns,
      data,
      sortTypes: {
        alphanumeric: (row1, row2, columnName) => {
          // Case-insensitive sorting
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
            <td colSpan="8"> No registered customers</td>
          </tr>
        </tfoot>
      )}
    </Table>
  );
};

export default CustomersGrid;
