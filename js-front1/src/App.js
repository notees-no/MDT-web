import React from 'react';
import ThemForm from './ThemForm';
import ThemTable from './ThemTable';
import EmployeeAPI from "./api/service";

const initialEmployees = EmployeeAPI.all();

function App() {
  const [employees, setEmployees] = React.useState(initialEmployees);

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
    <div>
      <ThemForm handleSubmit={addEmployee} inEmployee={{ name: "", job: "", address: "" }} />
      <ThemTable employees={employees} delEmployee={delEmp} />
    </div>
  );
}

export default App;