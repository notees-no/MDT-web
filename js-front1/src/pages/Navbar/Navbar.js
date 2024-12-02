import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout } from '../../redux/slices/authSlice';

const Navbar = ({ isDarkTheme, toggleTheme }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: (theme) => theme.palette.text.primary }}>
                    TWITCH.BY
                </Typography>
                <Button color="inherit" onClick={toggleTheme}>
                    {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
                </Button>
                {location.pathname !== '/login' && (
                    <Button color="inherit" onClick={handleLogout} sx={{ marginLeft: 2 }}>
                        Выход
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;