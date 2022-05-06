import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES } from '../../constants';
import PageLoading from '../../components/PageLoading';
import ErrorCard from '../../components/ErrorCard';
import DeckCard from '../../components/DeckCard';

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
              <DeckCard key={decklist.name} decklist={decklist} onClick={handleOpen} />
            ))}
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={modalIsOpen}>
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 400,
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  {currDecklist?.name}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {currDecklist?.description}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      )}
      {fetchState === FETCH_STATES.LOADING && <PageLoading />}
      {fetchState === FETCH_STATES.ERROR && <ErrorCard />}
    </div>
  );
};

export default Decklists;
