import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        background: {
            default: '#f7f7f8',
            paper: '#ffffff',
        },
        text: {
            primary: '#0E0E10',
            secondary: '#53535F',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '10px 0',
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#E5E5E5',
                        },
                        '&:hover fieldset': {
                            borderColor: '#9146FF',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#53535F',
                    },
                    '& .MuiInputBase-input': {
                        color: '#0E0E10',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '20px 0',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    backgroundColor: '#9146FF',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#772CE8',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#ffffff',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '100%',
                    maxWidth: '400px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                    },
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    height: 'auto', 
                    padding: '20px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                    color: '#0E0E10',
                },
            },
        },
    },
});

const darkTheme = createTheme({
    palette: {
        background: {
            default: '#0E0E10',
            paper: '#18181B',
        },
        text: {
            primary: '#EFEFF1',
            secondary: '#ADADB8',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    margin: '10px 0',
                    width: '100%',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#3D3D40',
                        },
                        '&:hover fieldset': {
                            borderColor: '#9146FF',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: '#EFEFF1',
                    },
                    '& .MuiInputBase-input': {
                        color: '#FFFFFF',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '20px 0',
                    padding: '12px 24px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    borderRadius: '8px',
                    backgroundColor: '#9146FF',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#772CE8',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '# 1d1d20',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '100%',
                    maxWidth: '400px',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                    },
                },
            },
        },
        MuiBox: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    height: 'auto', 
                    padding: '20px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    marginBottom: '16px',
                    color: '#EFEFF1',
                },
            },
        },
    },
});
 
export { lightTheme, darkTheme };