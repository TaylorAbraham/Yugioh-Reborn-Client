import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const ErrorCard = (): JSX.Element => {
  return (
    <Card
      sx={{
        width: 400,
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        mt: 5,
        left: 0,
        right: 0,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }}>
            Can&apos;t connect to server
          </Typography>
          <CloudOffIcon fontSize="large" sx={{ position: 'absolute', right: '37px' }} />
        </Box>
        <Typography variant="body2">
          Apologies, the server cannot be reached. Please file an issue on Yugioh Reborn&apos;s
          GitHub page letting me know that it is down, and I will resolve the issue as soon as I
          can!
        </Typography>
      </CardContent>
      <CardActions>
        <Link underline="hover" href="https://github.com/TaylorAbraham/Yugioh-Reborn-Client/issues">
          View GitHub
        </Link>
      </CardActions>
    </Card>
  );
};

export default ErrorCard;
