import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Card from '../../../components/Card';
import { type Decklist } from '../../../types';

type DeckModalProps = {
  isOpen: boolean;
  decklist?: Decklist;
  onClose: () => void;
};

type ViewMode = 'visual' | 'text';

const DeckModal = ({ isOpen, decklist, onClose }: DeckModalProps): JSX.Element => {
  const [viewMode, setViewMode] = useState<ViewMode>('visual');
  const [deckText, setDeckText] = useState('');

  const downloadDecklist = (): void => {
    if (decklist) {
      let stringifiedDecklist = '#created by Yu-Gi-Oh! Reborn\n#main';
      decklist.mainDeck.map((entry) => {
        stringifiedDecklist += `${entry.card.id}\n`.repeat(entry.quantity);
      });
      stringifiedDecklist += '#extra\n';
      decklist.extraDeck.map((entry) => {
        stringifiedDecklist += `${entry.card.id}\n`.repeat(entry.quantity);
      });
      stringifiedDecklist += '!side\n';
      decklist.sideDeck.map((entry) => {
        stringifiedDecklist += `${entry.card.id}\n`.repeat(entry.quantity);
      });

      const element = document.createElement('a');
      element.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(stringifiedDecklist),
      );
      element.setAttribute('download', `${decklist.name}.ydk`);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
  }

  useEffect(() => {
    if (decklist) {
      setDeckText(
        decklist.mainDeck.map((entry) => `${entry.quantity} ${entry.card.name}`).join('\n') +
        '\n\n' +
        decklist.extraDeck.map((entry) => `${entry.quantity} ${entry.card.name}`).join('\n'),
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
    >
      <Fade in={isOpen}>
        <Box
          sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minWidth: '80%',
            maxHeight: '85%',
            overflowY: 'scroll',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            pb: 18,
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 5, right: 5 }}
            size="large"
            color="inherit"
            aria-label="close"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h2">{decklist?.name}</Typography>
          <Typography
            sx={{ textAlign: 'center', maxWidth: '60rem', mx: 'auto', my: 1 }}
            variant="body1"
          >
            {decklist?.description}
          </Typography>
          <Button variant="contained" onClick={downloadDecklist} sx={{ m: 3 }}>
            Download Decklist as .ydk
          </Button>
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
            <>
              <div className="card-list__card-gallery">
                {decklist?.mainDeck.map((mainDeckEntry) => (
                  <Card
                    card={mainDeckEntry.card}
                    quantity={mainDeckEntry.quantity}
                    legality={mainDeckEntry.card.legality}
                    key={mainDeckEntry.card.id}
                  />
                ))}
              </div>
              <div className="card-list__card-gallery">
                {decklist?.extraDeck.map((extraDeckEntry) => (
                  <Card
                    card={extraDeckEntry.card}
                    quantity={extraDeckEntry.quantity}
                    legality={extraDeckEntry.card.legality}
                    key={extraDeckEntry.card.id}
                  />
                ))}
              </div>
            </>
          ) : (
            <TextField
              multiline
              rows={20}
              value={deckText}
              variant="outlined"
              color="primary"
              sx={{ mt: 2, maxWidth: '30rem', width: '100%' }}
            />
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeckModal;
