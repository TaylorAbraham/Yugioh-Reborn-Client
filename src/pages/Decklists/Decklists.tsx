import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES } from '../../constants';
import PageLoading from '../../components/PageLoading';
import ErrorCard from '../../components/ErrorCard';
import DeckCard from './DeckCard';
import DeckModal from './DeckModal';

const Decklists = (): JSX.Element => {
  const { fetchState, decklists } = useCardInfoContext();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [currDecklist, setCurrDecklist] = React.useState<Decklist | undefined>(undefined);
  const handleOpen = (decklist: Decklist) => {
    setCurrDecklist(decklist);
    setModalIsOpen(true);
  };

  return (
    <div className="content">
      {fetchState === FETCH_STATES.DONE && (
        <>
          <div className="header">
            <Typography variant="h1" sx={{ mt: 3 }}>
              Decklists
            </Typography>
            <Typography variant="body1" sx={{ mt: 1, mb: 3 }}>
              This is a collection of Yugioh Reborn decks that showcase what the format is like. All
              of these decks have been tested against each other and the playing field overall is
              quite level!
            </Typography>
          </div>
          <div className="card-list">
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem',
              }}
            >
              {decklists.map((decklist) => (
                <DeckCard key={decklist.name} decklist={decklist} onClick={handleOpen} />
              ))}
            </Box>
            <DeckModal
              isOpen={modalIsOpen}
              decklist={currDecklist}
              onClose={() => setModalIsOpen(false)}
            />
          </div>
        </>
      )}
      {fetchState === FETCH_STATES.LOADING && <PageLoading />}
      {fetchState === FETCH_STATES.ERROR && <ErrorCard />}
    </div>
  );
};

export default Decklists;
