import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import TextField from '@mui/material/TextField';
import Card from '../../../components/Card';

type DeckModalProps = {
  isOpen: boolean;
  decklist?: Decklist;
  onClose: () => void;
};

type ViewMode = 'visual' | 'text';

const DeckModal = ({ isOpen, decklist, onClose }: DeckModalProps): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>('visual');
  const [deckText, setDeckText] = useState('');

  useEffect(() => {
    if (decklist) {
      setDeckText(
        decklist.mainDeck.map((item) => `${item.quantity} ${item.card.name}`).join('\n') +
          '\n\n' +
          decklist.extraDeck.map((item) => `${item.quantity} ${item.card.name}`).join('\n'),
      );
    }
  }, [decklist]);

  const handleToggleChange = (event: React.MouseEvent<HTMLElement>, newViewMode: ViewMode) => {
    setViewMode(newViewMode);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '80%',
            maxHeight: '90%',
            overflowY: 'scroll',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h2">{decklist?.name}</Typography>
          <Typography
            sx={{ textAlign: 'center', maxWidth: '60rem', mx: 'auto', my: 1 }}
            variant="body1"
          >
            {decklist?.description}
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={viewMode}
            exclusive
            onChange={handleToggleChange}
          >
            <ToggleButton value="visual">Visual</ToggleButton>
            <ToggleButton value="text">Text</ToggleButton>
          </ToggleButtonGroup>
          {viewMode === 'visual' ? (
            <Box sx={{ mx: '50px', mt: 2 }}>
              <div className="card-list__card-gallery">
                {decklist?.mainDeck.map((mainDeckItem) => (
                  <Card
                    card={mainDeckItem.card}
                    quantity={mainDeckItem.quantity}
                    legality={mainDeckItem.card.legality}
                    key={mainDeckItem.card.id}
                  />
                ))}
              </div>
              <div className="card-list__card-gallery">
                {decklist?.extraDeck.map((extraDeckItem) => (
                  <Card
                    card={extraDeckItem.card}
                    quantity={extraDeckItem.quantity}
                    legality={extraDeckItem.card.legality}
                    key={extraDeckItem.card.id}
                  />
                ))}
              </div>
            </Box>
          ) : (
            <TextField
              multiline
              rows={20}
              value={deckText}
              variant="outlined"
              color="primary"
              sx={{ mt: 2, width: '30rem' }}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeckModal;
