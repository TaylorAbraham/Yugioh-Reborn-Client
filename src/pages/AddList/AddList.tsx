import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import PageLoading from '../../components/PageLoading';
import ErrorCard from '../../components/ErrorCard';
import { useCardInfoContext } from '../../components/CardInfoContext';
import Card from '../../components/Card';
import { FETCH_STATES } from '../../constants';
import './AddList.scss';

const AddList = (): JSX.Element => {
  const { fetchState, addList } = useCardInfoContext();

  return (
    <div className="content">
      {fetchState === FETCH_STATES.DONE && (
        <div className="card-list">
          <Typography variant="h1" sx={{ mt: 3 }}>
            Addition List
          </Typography>
          <Typography className="card-list__about" variant="body1" sx={{ mt: 1, mb: 3 }}>
            These are cards that were released after the format&apos;s snapshot but have been added
            as they follow the spirit of the format and enhance it.
          </Typography>
          {addList.map((group) => (
            <>
              <Divider sx={{ my: 3 }} />
              <div key={group.name}>
                <Typography variant="h2" align="center">
                  {group.name}
                </Typography>
                <div className="card-list__card-gallery">
                  {group.cards.map((addListItem) => (
                    <Card card={addListItem.card} key={addListItem.id} />
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      {fetchState === FETCH_STATES.LOADING && <PageLoading />}
      {fetchState === FETCH_STATES.ERROR && <ErrorCard />}
    </div>
  );
};

export default AddList;
