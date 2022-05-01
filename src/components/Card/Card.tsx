import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './Card.scss';

type CardProps = {
  card: Card;
  highlighted?: boolean;
  remark?: string;
};

const Card = ({ card, highlighted, remark }: CardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card">
      <Typography className="card__text" variant="body2">
        {card.name}
      </Typography>
      <div className="card__img-container">
        <a
          href={`https://db.ygoprodeck.com/card/?search=${card.id}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            key={card.id}
            src={card.images[0].image_url}
            className={`card__img card__img-view ${highlighted && 'card__img--highlighted'} ${
              isHovered && 'card__img--hover'
            }`}
          />
          <img
            key={`${card.id}-fake`}
            src={card.images[0].image_url}
            className="card__img card__img-controller"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          />
        </a>
      </div>
      <Typography className={`card__text card__remark ${!remark && 'invisible'}`} variant="body2">
        {remark || 'No Remark'}
      </Typography>
    </div>
  );
};

export default Card;
