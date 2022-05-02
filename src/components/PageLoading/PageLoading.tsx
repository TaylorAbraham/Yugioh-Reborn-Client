import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const PageLoading = (): JSX.Element => {
  return (
    <Box
      sx={{
        marginTop: '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CircularProgress size="5rem" />
      <Typography variant="body1" mt={3} sx={{ textAlign: 'center' }}>
        The server is likely waking up.
      </Typography>
      <Typography variant="body2" sx={{ marginTop: '0.2rem', textAlign: 'center' }}>
        This may take a few seconds.
      </Typography>
    </Box>
  );
};

export default PageLoading;
