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
      <Box m={4}>
        <Typography variant="h2" mb={1}>
          Format Background
        </Typography>
        <Typography variant="h3">Motivation</Typography>
        <Typography variant="body2" mb={1}>
          Coming Soon!
        </Typography>
        <Typography variant="h3" mt={1}>
          Format Vision
        </Typography>
        <Typography variant="body2" mb={1}>
          Coming Soon!
        </Typography>
        <Typography variant="h2" mt={3} mb={1}>
          Format Details
        </Typography>
        <Typography variant="h3">Legality</Typography>
        <Typography variant="body2" mb={1}>
          Coming Soon!
        </Typography>
        <Typography variant="h3" mt={1}>
          Rules
        </Typography>
        <Typography variant="body2" mb={1}>
          Coming Soon!
        </Typography>
        <Typography variant="h3" mt={1}>
          How & Where to Play
        </Typography>
        <Typography variant="body2" mb={1}>
          Coming Soon!
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
