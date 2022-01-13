import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import './AddList.scss';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES } from '../../constants';

const AddList = (): JSX.Element => {
  const { fetchState, addList } = useCardInfoContext();

  const renderCard = (addCard: AddListItem): JSX.Element => (
    <div className="add-list__card">
      <img
        key={addCard.id}
        src={addCard.card.images[0].image_url_small}
        className="add-list__card-img"
      />
      <Typography className="add-list__card-text" variant="body2">
        {addCard.card.name}
      </Typography>
    </div>
  );

  return (
    <div>
      {fetchState === FETCH_STATES.LOADING && (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      )}
      {fetchState === FETCH_STATES.DONE && (
        <div className="add-list">
          <Typography variant="h1" sx={{ mt: 3 }}>
            Addition List
          </Typography>
          <Typography className="add-list__about" variant="body1" sx={{ mt: 1, mb: 3 }}>
            These are cards that were released after the format&apos;s snapshot, have been added to
            the format as they follow the spirit of the format and enhance it.
          </Typography>
          <div className="add-list__card-gallery">{addList.map(renderCard)}</div>
        </div>
      )}
    </div>
  );
};

export default AddList;
