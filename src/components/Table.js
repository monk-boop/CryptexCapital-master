// Table.js
import React from 'react';

export default function Table({ columns, data, onRowClick }) {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column.headerName}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} onClick={() => onRowClick(row.Sector)} style={{ cursor: 'pointer' }}>
                        {columns.map((column, colIndex) => (
                            <td key={colIndex}>{row[column.field]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

