import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import './AddList.scss';
import { useCardInfoContext } from '../../components/CardInfoContext';
import Card from '../../components/Card';
import { FETCH_STATES } from '../../constants';

const AddList = (): JSX.Element => {
  const { fetchState, addList } = useCardInfoContext();

  return (
    <div>
      {fetchState === FETCH_STATES.LOADING && (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      )}
      {fetchState === FETCH_STATES.DONE && (
        <div className="card-list">
          <Typography variant="h1" sx={{ mt: 3 }}>
            Addition List
          </Typography>
          <Typography className="card-list__about" variant="body1" sx={{ mt: 1, mb: 3 }}>
            These are cards that were released after the format&apos;s snapshot, have been added to
            the format as they follow the spirit of the format and enhance it.
          </Typography>
          {addList.map((group) => (
            <div key={group.name}>
              <Typography variant="h2" sx={{ mt: 3 }} align="center">
                {group.name}
              </Typography>
              <div className="card-list__card-gallery">
                {group.cards.map((addListItem) => (
                  <Card card={addListItem.card} key={addListItem.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AddList;
