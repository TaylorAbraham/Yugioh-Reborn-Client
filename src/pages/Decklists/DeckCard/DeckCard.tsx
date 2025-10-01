import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { type Decklist } from '../../../types';

type DeckCardProps = {
  decklist: Decklist;
  onClick: (decklist: Decklist) => void;
};
const DeckCard = ({ decklist, onClick }: DeckCardProps): JSX.Element => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 400,
      }}
    >
      <CardActionArea sx={{ height: '100%' }} onClick={() => onClick(decklist)}>
        <CardMedia component="img" image={decklist.imgURL} alt="Preview of Deck" />
        <CardContent sx={{ height: '100%' }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 1 }}>
              {decklist.name}
            </Typography>
          </Box>
          <Typography variant="body2">{decklist.description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default DeckCard;
