import { createTheme } from '@mui/material/styles';

const formTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '16px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#E5E5E5', // Светлый цвет границы поля ввода
            },
            '&:hover fieldset': {
              borderColor: '#9146FF', // Фиолетовый цвет при наведении
            },
          },
          '& .MuiInputLabel-root': {
            color: '#53535F', // Цвет названий
          },
          '& .MuiInputBase-input': {
            color: '#0E0E10', // Цвет текста ввода
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#9146FF', // Основной цвет кнопки
          color: 'white',
          '&:hover': {
            backgroundColor: '#772CE8', // Фиолетовый цвет при наведении
          },
        },
      },
    },
  },
});

export default formTheme;