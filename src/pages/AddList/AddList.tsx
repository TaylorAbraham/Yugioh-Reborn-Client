import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import './AddList.scss';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES } from '../../constants';

const AddList = (): JSX.Element => {
  const { fetchState, addList } = useCardInfoContext();

  const renderCard = (flCard: AddListItem): JSX.Element => (
    <img key={flCard.id} src={flCard.card.images[0].image_url_small} />
  );

  return (
    <div>
      {fetchState === FETCH_STATES.LOADING && (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      )}
      {fetchState === FETCH_STATES.DONE && (
        <>
          <div className="add-list__card-gallery">{addList.map(renderCard)}</div>
        </>
      )}
    </div>
  );
};

export default AddList;
