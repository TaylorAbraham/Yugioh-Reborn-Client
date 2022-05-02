import React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES } from '../../constants';
import Card from '../../components/Card';
import PageLoading from '../../components/PageLoading';
import ErrorCard from '../../components/ErrorCard';

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
          {decklists.map((decklist) => (
            <>
              <Divider sx={{ my: 3 }} />
              <div key={decklist.name}>
                <Typography variant="h2" align="center">
                  {decklist.name}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ maxWidth: '45rem', margin: 'auto' }}
                >
                  {decklist.description}
                </Typography>
                <div className="card-list__card-gallery">
                  {decklist.mainDeck.map((mainDeckItem) => (
                    <Card
                      card={mainDeckItem.card}
                      quantity={mainDeckItem.quantity}
                      maxLegalQuantity={mainDeckItem.card.legality}
                      key={mainDeckItem.card.id}
                    />
                  ))}
                </div>
                <div className="card-list__card-gallery">
                  {decklist.extraDeck.map((extraDeckItem) => (
                    <Card
                      card={extraDeckItem.card}
                      quantity={extraDeckItem.quantity}
                      maxLegalQuantity={extraDeckItem.card.legality}
                      key={extraDeckItem.card.id}
                    />
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

export default Decklists;
