import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type DeckCardProps = {
  decklist: Decklist;
};
const DeckCard = ({ decklist }: DeckCardProps): JSX.Element => {
  return (
    <Card
      sx={{
        width: 400,
      }}
    >
      <CardMedia component="img" image={decklist.imgURL} alt="Picture of Deck" />
      <CardContent>
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {decklist.name}
          </Typography>
        </Box>
        <Typography variant="body2">{decklist.description}</Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default DeckCard;
