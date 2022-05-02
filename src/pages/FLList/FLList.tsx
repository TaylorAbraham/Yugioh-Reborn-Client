import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import BlockIcon from '@mui/icons-material/Block';
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PageLoading from '../../components/PageLoading';
import ErrorCard from '../../components/ErrorCard';
import { useCardInfoContext } from '../../components/CardInfoContext';
import Card from '../../components/Card';
import { FETCH_STATES, LEGALITY } from '../../constants';
import './FLList.scss';

const FLList = (): JSX.Element => {
  const { fetchState, flList, cardDB } = useCardInfoContext();

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
    <div className="content">
      {fetchState === FETCH_STATES.DONE && (
        <div className="card-list">
          <Typography variant="h1" sx={{ mt: 3 }}>
            Forbidden & Limited List
          </Typography>
          <Typography className="card-list__about" variant="body1" sx={{ mt: 1 }}>
            This format&apos;s banlist is based on the TCG banlist of the time, which was the{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://yugioh.fandom.com/wiki/October_2014_Lists_(TCG)"
            >
              October 2014 F&L list
            </a>
            . <OpenInNewIcon sx={{ fontSize: '1rem', mb: '-3px' }} />
          </Typography>
          <Button variant="contained" onClick={downloadFLList} sx={{ m: 3 }}>
            Download Banlist + Addlist
          </Button>
          <Divider sx={{ mt: 1, mb: 3 }} />
          <Typography variant="h2">
            Forbidden Cards <BlockIcon sx={{ fontSize: '1.75rem', mb: '-3px' }} />
          </Typography>
          <div className="card-list__card-gallery">
            {flList.forbidden.map((fLListItem) => (
              <Card
                card={fLListItem.card}
                highlighted={!!fLListItem.remark}
                remark={fLListItem.remark}
                key={fLListItem.id}
              />
            ))}
          </div>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h2">
            Limited Cards <Filter1Icon sx={{ fontSize: '1.75rem', mb: '-3px' }} />
          </Typography>
          <div className="card-list__card-gallery">
            {flList.limited.map((fLListItem) => (
              <Card
                card={fLListItem.card}
                highlighted={!!fLListItem.remark}
                remark={fLListItem.remark}
                key={fLListItem.id}
              />
            ))}
          </div>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h2">
            Semi-Limited Cards <Filter2Icon sx={{ fontSize: '1.75rem', mb: '-3px' }} />
          </Typography>
          <div className="card-list__card-gallery">
            {flList.semiLimited.map((fLListItem) => (
              <Card
                card={fLListItem.card}
                highlighted={!!fLListItem.remark}
                remark={fLListItem.remark}
                key={fLListItem.id}
              />
            ))}
          </div>
          <Divider sx={{ my: 3 }} />
          <Typography variant="h2">
            Newly Unlimited Cards <LockOpenIcon sx={{ fontSize: '1.75rem', mb: '-3px' }} />
          </Typography>
          <div className="card-list__card-gallery">
            {flList.unlimited.map((fLListItem) => (
              <Card
                card={fLListItem.card}
                highlighted={!!fLListItem.remark}
                remark={fLListItem.remark}
                key={fLListItem.id}
              />
            ))}
          </div>
        </div>
      )}
      {fetchState === FETCH_STATES.LOADING && <PageLoading />}
      {fetchState === FETCH_STATES.ERROR && <ErrorCard />}
    </div>
  );
};

export default FLList;
