import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './NavBar.scss';

const NavBar = (): JSX.Element => {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const mobileMenuOpen = !!anchorEl;

  const openMobileMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setAnchorEl(null);
  };

  const closeAndNavigate = (href: string) => {
    closeMobileMenu();
    navigate(href);
  };

  return (
    <AppBar className="navbar" position="static">
      {/* Mobile Toolbar */}
      <Toolbar sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'space-between' }}>
        <Typography variant="h6" className="navbar__title">
          <Link to="/">Yugioh Reborn</Link>
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={openMobileMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={mobileMenuOpen}
          onClose={closeMobileMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => closeAndNavigate('/')}>Home</MenuItem>
          <MenuItem onClick={() => closeAndNavigate('/decklists')}>Decklists</MenuItem>
          <MenuItem onClick={() => closeAndNavigate('/fllist')}>Forbidden & Limited List</MenuItem>
          <MenuItem onClick={() => closeAndNavigate('/addlist')}>Addition List</MenuItem>
        </Menu>
      </Toolbar>
      {/* Desktop Toolbar */}
      <Toolbar sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Typography variant="h6" className="navbar__title">
          <Link to="/">Yugioh Reborn</Link>
        </Typography>
        <div className="v-divider" />
        <Link to="/" className={`underline-link ${path === '/' && 'current'}`}>
          <span className="inner">HOME</span>
        </Link>
        <Link to="/decklists" className={`underline-link ${path === '/decklists' && 'current'}`}>
          <span className="inner">DECKLISTS</span>
        </Link>
        <Link to="/fllist" className={`underline-link ${path === '/fllist' && 'current'}`}>
          <span className="inner">FORBIDDEN & LIMITED LIST</span>
        </Link>
        <Link to="/addlist" className={`underline-link ${path === '/addlist' && 'current'}`}>
          <span className="inner">ADDITION LIST</span>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
