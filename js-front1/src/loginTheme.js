import { createTheme } from '@mui/material/styles';

const loginTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '10px',
          width: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '5px',
          backgroundColor: '#4CAF50',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#6ecc72',
          },
        },
      },
    },
  },
});

export default loginTheme;