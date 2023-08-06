import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from '../redux/actions/authActions';


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
    <AppBar position="static"  sx={{ bgcolor: '#e8e8e8'}}>
      <Container maxWidth="xl" sx={{ bgcolor: '#e8e8e8'}}>
        <Toolbar disableGutters >
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'arial',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: '#383838',
                textDecoration: 'none',
                }}
            >
                QuantReady
            </Typography>
        
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', flex: 0 }}>
                <MenuItem component={Link} to="/questions">
                    <Typography sx={{ minWidth: 100, color: "#4f4e4e", fontFamily: 'arial', fontWeight: 800 }}>Questions</Typography>
                </MenuItem>
                {isAdmin && <MenuItem component={Link} to="/admin">
                    <Typography sx={{ minWidth: 100, color: "#4f4e4e", fontFamily: 'arial', fontWeight: 800 }}>Admin</Typography>
                </MenuItem>}
                <MenuItem component={Link} to="/about">
                    <Typography sx={{ minWidth: 100, color: "#4f4e4e", fontFamily: 'arial', fontWeight: 800 }}>About Us</Typography>
                </MenuItem>
            </Box>

            {/* Account Settings */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
                <Tooltip title="Account Settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <AccountCircleIcon fontSize="large" alt="User Icon"/>
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
                >
                {settings.map((setting) => (
                    setting === 'Logout' ? (
                    // Render a different MenuItem for "Logout"
                    <MenuItem key={setting} onClick={handleLogout}>
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
