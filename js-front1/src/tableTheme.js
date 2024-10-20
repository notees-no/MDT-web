import { createTheme } from '@mui/material/styles';

const tableTheme = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root : {
          border: '1px solid #ccc',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 'bold',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
          color: 'white',
        },
      },
    },
  },
});

export default tableTheme;