import EmployeeAPI from "./api/service";
import EmployeeTable from "./Table";
import { useState } from "react";
import Form from "./Form";
import { Box } from '@mui/material';

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
    <Box sx={{ padding: '20px' }}>
      <Form handleSubmit={addEmployee} inEmployee={{ name: "", job: "", address: "" }} />
      <Box sx={{ marginBottom: '20px' }} />
      <EmployeeTable employees={employees} delEmployee={delEmp} />
    </Box>
  );
}

export default App;