import React from "react";

const Table = ({ employees, delEmployee }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Address</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => {
          return (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.job}</td>
              <td>{employee.address}</td>
              <td>
                <button onClick={() => delEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;