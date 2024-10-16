import React from 'react';
import ThemForm from './ThemForm';
import ThemTable from './ThemTable';
import EmployeeAPI from "./api/service";
import Login from './Login';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const initialEmployees = EmployeeAPI.all();

function App() {
  const [employees, setEmployees] = React.useState(initialEmployees);
  const [authenticatedUser, setAuthenticatedUser] = React.useState(null);

  const delEmp = (id) => {
    if (EmployeeAPI.delete(id)) {
      setEmployees(employees.filter((employee) => employee.id !== id));
    }
  };

  const addEmployee = (employee) => {
    const newEmployee = EmployeeAPI.add(employee);
    if (newEmployee) {
      setEmployees([...employees, newEmployee]);
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setAuthenticatedUser={setAuthenticatedUser} />} />
        <Route path="/main" element={authenticatedUser ? (
          <div>
            <ThemForm handleSubmit={addEmployee} inEmployee={{ name: "", job: "", address: "" }} />
            <ThemTable employees={employees} delEmployee={delEmp} />
          </div>
        ) : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;