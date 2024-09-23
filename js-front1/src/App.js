import "./App.css";
import EmployeeAPI from "./api/service";
import Table from "./Table";
import { useState } from "react";

const initialEmployees = EmployeeAPI.all();

function App() {
  const [employees, setEmployees] = useState(initialEmployees);

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
    <div className="App">
      <Table employees={employees} delEmployee={delEmp} />
    </div>
  );
}

export default App;