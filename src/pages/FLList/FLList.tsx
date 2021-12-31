import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './FLList.scss';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES, LEGALITY } from '../../constants';

const FLList = (): JSX.Element => {
  const { fetchState, flList, cardDB } = useCardInfoContext();

  const renderCard = (flCard: FLListItem): JSX.Element => (
    <img
      key={flCard.id}
      src={flCard.card.images[0].image_url_small}
      className={`${!!flCard.remark && 'fllist__highlighted'}`}
    />
  );

  const downloadFLList = (): void => {
    let stringifiedFLList = '#[Yugioh Reborn]\n!Yugioh Reborn\n$whitelist\n#Forbidden\n';
    flList.forbidden.map((item) => {
      stringifiedFLList += `${item.card.id} 0 --${item.card.name}\n`;
    });
    stringifiedFLList += '#Limited\n';
    flList.limited.map((item) => {
      stringifiedFLList += `${item.card.id} 1 --${item.card.name}\n`;
    });
    stringifiedFLList += '#Semi limited\n';
    flList.semiLimited.map((item) => {
      stringifiedFLList += `${item.card.id} 2 --${item.card.name}\n`;
    });
    stringifiedFLList += '#Unlimited\n';
    for (const [_id, card] of Object.entries(cardDB)) {
      if (card.legality === LEGALITY.UNLIMITED) {
        stringifiedFLList += `${card.id} 3 --${card.name}\n`;
      }
    }

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(stringifiedFLList),
    );
    element.setAttribute('download', '00Reborn.lflist.conf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      {fetchState === FETCH_STATES.LOADING && (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      )}
      {fetchState === FETCH_STATES.DONE && (
        <>
          <Button variant="contained" onClick={downloadFLList}>
            Download Banlist
          </Button>
          <div className="fllist__card-gallery">
            <Typography variant="h3">Forbidden Cards</Typography>
            {flList.forbidden.map(renderCard)}
            <Typography variant="h3">Limited Cards</Typography>
            {flList.limited.map(renderCard)}
            <Typography variant="h3">Semi-Limited Cards</Typography>
            {flList.semiLimited.map(renderCard)}
            <Typography variant="h3">Newly Unlimited Cards</Typography>
            {flList.unlimited.map(renderCard)}
          </div>
        </>
      )}
    </div>
  );
};

export default FLList;
