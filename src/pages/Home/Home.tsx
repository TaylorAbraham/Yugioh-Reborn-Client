import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Home.scss';

const Home = () => {
  return (
    <Box className="home content">
      <Box className="home__splash-img">
        <Box className="home__hero-text">
          <Typography mb={2} variant="h2">
            YUGIOH REBORN
          </Typography>
          <Typography variant="body1">
            A format with the best of 2014 Yugioh with fixes, tweaks, and more!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
