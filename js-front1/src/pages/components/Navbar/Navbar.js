import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ isDarkTheme, toggleTheme }) => {
    return (
        <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.background.default }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: (theme) => theme.palette.text.primary }}>
                    TWITCH.BY
                </Typography>
                <Button color="inherit" onClick={toggleTheme}>
                    {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;