// Table.js
import React from "react";
import Table from "react-bootstrap/Table";

export default function TableComponent({ columns, data, onRowClick }) {
  console.log("data first is ", data);
  const tableData = Array.isArray(data) ? data : [];
  console.log("Data passed to TableComponent: ", tableData);
  return (
    <div style={{ height: "400px", overflowY: "auto" }} class="scrollable">
      <Table striped="columns" responsive="sm" hover>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.headerName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => {
                if (row && "Sector" in row) {
                  onRowClick && onRowClick(row.Sector);
                }
                if (row && "Ticker" in row) {
                  onRowClick && onRowClick(row);
                }
              }}
              style={{ cursor: onRowClick ? "pointer" : "default" }}
            >
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{row[column.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
