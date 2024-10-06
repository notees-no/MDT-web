import React from "react";
import { Table as MuiTable, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Button from '@mui/material/Button';

const EmployeeTable = ({ employees, delEmployee }) => {
  return (
    <MuiTable sx={{ border: '1px solid #ccc' }}>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Job</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Remove</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.map((employee, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.job}</TableCell>
              <TableCell>{employee.address}</TableCell>
              <TableCell>
                <Button onClick={() => delEmployee(employee.id)} sx={{ backgroundColor: 'red', color: 'white' }}>Delete</Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </MuiTable>
  );
};

export default EmployeeTable;