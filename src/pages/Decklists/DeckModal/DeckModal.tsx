import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

type DeckModalProps = {
  isOpen: boolean;
  decklist?: Decklist;
  onClose: () => void;
};
const DeckModal = ({ isOpen, decklist, onClose }: DeckModalProps): JSX.Element => {
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
            {decklist?.name}
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {decklist?.description}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeckModal;
