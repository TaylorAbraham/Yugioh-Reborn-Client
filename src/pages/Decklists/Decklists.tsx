import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES } from '../../constants';
import PageLoading from '../../components/PageLoading';
import ErrorCard from '../../components/ErrorCard';
import DeckCard from '../../components/DeckCard';

const Decklists = (): JSX.Element => {
  const { fetchState, decklists } = useCardInfoContext();

  return (
    <div className="content">
      {fetchState === FETCH_STATES.DONE && (
        <div className="card-list">
          <Typography variant="h1" sx={{ mt: 3 }}>
            Decklists
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, mb: 3, textAlign: 'center', maxWidth: '45rem' }}>
            This is a collection of Yugioh Reborn decks that showcase what the format is like. All
            of these decks have been tested against each other and the playing field overall is
            quite level!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            {decklists.map((decklist) => (
              <DeckCard key={decklist.name} decklist={decklist} />
            ))}
          </Box>
        </div>
      )}
      {fetchState === FETCH_STATES.LOADING && <PageLoading />}
      {fetchState === FETCH_STATES.ERROR && <ErrorCard />}
    </div>
  );
};

export default Decklists;
