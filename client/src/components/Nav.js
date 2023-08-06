import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../redux/actions/authActions';

import Logo from '../images/Logo.png';
import Logo2 from '../images/Logo2.png';
import '../styles/nav.css';

const settings = ['Progress', 'Account', 'Login'];

function Nav() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const loginState = useSelector(state => state.auth);
  const isLoggedIn = (loginState && loginState.user);
  const loginText = isLoggedIn ? 'Logout' : 'Login';
  const isAdmin = (loginState && loginState.user && loginState.user.isAdmin) ? true : false;
  const settings = ['Progress', 'Account', loginText];
  const dispatch = useDispatch();

  const handleLogout = () => {
    setAnchorElUser(null);
    dispatch(logoutUser());
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl" className="navbar-container">
        <Toolbar disableGutters className="toolbar">
          <Box className="logo-container">
            <img
              src={Logo2}
              alt="QuantReady Logo"
              className="logo"
            />
          </Box>

          <Box className="menuItems">
           
            <MenuItem
              component={Link}
              to="/"
              className="menu-item tooltip-button"
            >
              Home
            </MenuItem>

           
            <MenuItem
              component={Link}
              to="/questions"
              className="menu-item tooltip-button"
            >
              Questions
            </MenuItem>
            {isAdmin && <MenuItem
              component={Link}
              to="/admin"
              className="menu-item tooltip-button"
            >
              Admin
            </MenuItem>}
            <MenuItem
              component={Link}
              to="/about"
              className="menu-item tooltip-button"
            >
              About Us
            </MenuItem>
          </Box>

          <Box className="accountIcon">
            <Tooltip title="Menu" className="tooltip">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
                className="tooltip-button"
              >
                <MenuRoundedIcon fontSize="large" alt="Menu Icon" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              PaperProps={{
                style: {
                  color: 'white', 
                  backgroundColor: 'navy',
                  borderRadius: '25px',
                 
                },
              }}
            >
              
                {settings.map((setting) => (
                    setting === 'Logout' ? (
                    // Render a different MenuItem for "Logout"
                    <MenuItem key={setting} onClick={handleLogout} className="tooltip-button">
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                    ) : (
                    // Regular MenuItem for other settings
                    <MenuItem key={setting} component={Link} to={`/${setting.toLowerCase()}`} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                    )
                ))}
                </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
