import React from "react";
import { TextField, Button } from '@mui/material';

const Form = ({ handleSubmit, inEmployee }) => {
  const [employee, setEmployee] = React.useState(inEmployee);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(employee);
    setEmployee(inEmployee);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField
        label="Name"
        name="name"
        value={employee.name}
        onChange={handleChange}
      />
      <TextField
        label="Job"
        name="job"
        value={employee.job}
        onChange={handleChange}
      />
      <TextField
        label="Address"
        name="address"
        value={employee.address}
        onChange={handleChange}
      />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default Form;