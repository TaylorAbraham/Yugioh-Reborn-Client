import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type FLIconProps = {
  legality: number;
};
const FLIcon = ({ legality }: FLIconProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: '15px',
        height: '15px',
        borderRadius: '100%',
        backgroundColor: 'black',
        border: '2px solid red',
        textAlign: 'center',
        transform: 'rotate(5deg)',
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: 'yellow', marginTop: '-1px', fontWeight: 'bold', marginLeft: '1px' }}
      >
        {legality}
      </Typography>
    </Box>
  );
};

export default FLIcon;
