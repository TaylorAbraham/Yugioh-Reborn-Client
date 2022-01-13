import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BlockIcon from '@mui/icons-material/Block';
import './FLList.scss';
import { useCardInfoContext } from '../../components/CardInfoContext';
import { FETCH_STATES, LEGALITY } from '../../constants';

const FLList = (): JSX.Element => {
  const { fetchState, flList, cardDB } = useCardInfoContext();

  const renderCard = (flCard: FLListItem): JSX.Element => (
    <div className="fllist__card">
      <img
        key={flCard.id}
        src={flCard.card.images[0].image_url_small}
        className={`fllist__card-img ${!!flCard.remark && 'fllist__card-img--highlighted'}`}
      />
      <Typography className="fllist__card-text" variant="body2">
        {flCard.card.name}
      </Typography>
    </div>
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
        <div className="fllist">
          <Typography variant="h1" sx={{ mt: 3 }}>
            Forbidden & Limited List
          </Typography>
          <Button variant="contained" onClick={downloadFLList} sx={{ m: 3 }}>
            Download Banlist
          </Button>
          <Typography variant="h2">
            Forbidden Cards <BlockIcon sx={{ fontSize: '1.75rem', mb: '-3px' }} />
          </Typography>
          <div className="fllist__card-gallery">{flList.forbidden.map(renderCard)}</div>
          <Typography variant="h2">Limited Cards</Typography>
          <div className="fllist__card-gallery">{flList.limited.map(renderCard)}</div>
          <Typography variant="h2">Semi-Limited Cards</Typography>
          <div className="fllist__card-gallery">{flList.semiLimited.map(renderCard)}</div>
          <Typography variant="h2">Newly Unlimited Cards</Typography>
          <div className="fllist__card-gallery">{flList.unlimited.map(renderCard)}</div>
        </div>
      )}
    </div>
  );
};

export default FLList;
