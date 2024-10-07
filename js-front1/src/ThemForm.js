import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'blue',
          color: 'white',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
        },
      },
    },
  },
});

const ThemForm = ({ handleSubmit, inEmployee }) => {
  const [employee, setEmployee] = React.useState(inEmployee);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(employee);
  };

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default ThemForm;