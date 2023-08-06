import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../images/Logo.png';
import Logo2 from '../images/Logo2.png';
import '../styles/nav.css';

const settings = ['Progress', 'Account', 'Login'];

function Nav() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // Make API call to logout
    fetch('/api/logout')
      .then(response => response.json())
      .then(data => {
        // Redirect to homepage after logout
        window.location.href = "/";
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
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
            <MenuItem
              component={Link}
              to="/admin"
              className="menu-item tooltip-button"
            >
              Admin
            </MenuItem>
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
                <MenuItem
                  component={Link}
                  to={`/${setting.toLowerCase()}`}
                  key={setting}
                  onClick={handleCloseUserMenu}
                  className="tooltip-button"
                >
                  {setting}
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout} className="tooltip-button">
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;