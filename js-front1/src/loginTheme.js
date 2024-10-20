import { createTheme } from '@mui/material/styles';

const loginTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '10px 0',
          width: '100%',
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
          margin: '20px 0', // Верхний и нижний отступ для кнопки
          padding: '10px 20px', // Внутренние отступы кнопки
          fontSize: '16px', // Размер шрифта текста кнопки
          fontWeight: 'bold', // Жирный шрифт для текста кнопки
          borderRadius: '5px', // Скругление углов кнопки
          backgroundColor: '#9146FF', // Цвет фона кнопки
          color: '#fff', // Цвет текста кнопки
          '&:hover': {
            backgroundColor: '#772CE8', // Цвет при наведении на кнопку
          },
        },
      },
    },
  },
});

export default loginTheme;