import { createTheme } from '@mui/material/styles';

const tableTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: { 
        root: {
          marginBottom: '16px', // Отступ снизу для карточек
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Тень для карточек
          backgroundColor: '#ffffff', // Белый фон карточек
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          marginBottom: '8px', // Отступ снизу для текста
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#9146FF', // Цвет фона кнопки
          color: 'white', // Цвет текста кнопки
          '&:hover': {
            backgroundColor: '#772CE8', // Цвет фона кнопки при наведении
          },
        },
      },
    },
  },
});

export default tableTheme;