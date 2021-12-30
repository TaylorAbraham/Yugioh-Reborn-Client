import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SERVER_URL, SERVER_ERRORS } from '../../constants';
import './FLList.scss';

enum STATES {
  INIT,
  LOADING,
  DONE,
}

type FLListResponse = FLList | ServerError;

// Custom type guard
const isFLList = (json: FLListResponse): json is FLList => {
  return (json as FLList).forbidden !== undefined;
};

const FLList = (): JSX.Element => {
  const [state, setState] = useState(STATES.INIT);
  const [fllist, setFllist] = useState<FLList>({ forbidden: [], limited: [], semiLimited: [], unlimited: [] });

  useEffect(() => {
    const fetchFLList = async (url: string) => {
      setState(STATES.LOADING);
      const res = await fetch(url);
      const json = (await res.json()) as FLListResponse;
      if (isFLList(json)) {
        setFllist(json);
        setState(STATES.DONE);
      } else {
        if (json.error.type === SERVER_ERRORS.SERVER_NOT_STARTED) {
          setTimeout(() => {
            fetchFLList(url).catch(console.error);
          }, 10000);
        }
      }
    };

    fetchFLList(`${SERVER_URL}/fllist`).catch(console.error);
  }, []);

  const renderCard = (flCard: FLListItem): JSX.Element => (
    <img
      key={flCard.id}
      src={flCard.card.images[0].image_url_small}
      className={`${!!flCard.remark && 'fllist__highlighted'}`}
    />
  );

  const downloadFLList = (): void => {
    let stringifiedFLList = '#[Yugioh Reborn]\n!Yugioh Reborn\n#Forbidden\n';
    fllist.forbidden.map((item) => {
      stringifiedFLList += `${item.card.id} 0 --${item.card.name}\n`;
    });
    stringifiedFLList += '#Limited\n';
    fllist.limited.map((item) => {
      stringifiedFLList += `${item.card.id} 1 --${item.card.name}\n`;
    });
    stringifiedFLList += '#Semi limited\n';
    fllist.semiLimited.map((item) => {
      stringifiedFLList += `${item.card.id} 2 --${item.card.name}\n`;
    });

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(stringifiedFLList));
    element.setAttribute('download', '00Reborn.lflist.conf');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div>
      {state === STATES.LOADING && (
        <div className="loading">
          <CircularProgress size="5rem" />
        </div>
      )}
      {state === STATES.DONE && (
        <>
          <Button variant="contained" onClick={downloadFLList}>
            Download Banlist
          </Button>
          <div className="fllist__card-gallery">
            <Typography variant="h3">Forbidden Cards</Typography>
            {fllist.forbidden.map(renderCard)}
            <Typography variant="h3">Limited Cards</Typography>
            {fllist.limited.map(renderCard)}
            <Typography variant="h3">Semi-Limited Cards</Typography>
            {fllist.semiLimited.map(renderCard)}
            <Typography variant="h3">Newly Unlimited Cards</Typography>
            {fllist.unlimited.map(renderCard)}
          </div>
        </>
      )}
    </div>
  );
};

export default FLList;
