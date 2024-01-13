

import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#333' , height: '200px' }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            ALPANA CHAVAN .<br />
          </Typography>

          {isMobile ? (
            // Render mobile-friendly menu icon
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem component={Link} to="/Resume" onClick={handleMenuClose}>
                  Resume
                </MenuItem>
                <MenuItem component={Link} to="/Contact" onClick={handleMenuClose}>
                  Contact
                </MenuItem>
              </Menu>
            </>
          ) : (
            
            <Tabs textColor="inherit">
              <Tab label={
                <Button component={Link} to="/Resume" color="inherit" variant="text">
                  Resume
                </Button>
              } />
              <Tab label={
                <Button component={Link} to="/Contact" color="inherit" variant="text">
                  Contact
                </Button>
              } />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;


