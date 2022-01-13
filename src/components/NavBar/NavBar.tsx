import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.scss';

const NavBar = (): JSX.Element => {
  const path = useLocation().pathname;

  return (
    <AppBar className="navbar" position="static">
      <Toolbar>
        <Typography variant="h6" className="navbar__title">
          <Link to="/">Yugioh Reborn</Link>
        </Typography>
        <div className="v-divider" />
        <Link to="/" className={`underline-link ${path === '/' && 'current'}`}>
          <span className="inner">HOME</span>
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
