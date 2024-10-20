import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Button from '@mui/material/Button';
import tableTheme from './tableTheme';

const EmployeeTable = ({ employees, delEmployee }) => {
  return (
    <ThemeProvider theme={tableTheme}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Remove</TableCell>
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
                  <Button onClick={() => delEmployee(employee.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </ThemeProvider>
  );
};

export default EmployeeTable;