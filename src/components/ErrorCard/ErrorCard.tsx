import React from 'react';
import MUICard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CloudOffIcon from '@mui/icons-material/CloudOff';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const githubIssuesUrl = 'https://github.com/TaylorAbraham/Yugioh-Reborn-Client/issues';

const ErrorCard = (): JSX.Element => {
  return (
    <MUICard
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
          Apologies, the server cannot be reached. Please file an issue on{' '}
          <Link href={githubIssuesUrl}>Yugioh Reborn&apos;s GitHub issues page</Link> letting me
          know that it is down, and I will resolve the issue as soon as I can!
        </Typography>
      </CardContent>
      <CardActions>
        <Link underline="hover" href={githubIssuesUrl}>
          View GitHub
        </Link>
      </CardActions>
    </MUICard>
  );
};

export default ErrorCard;
