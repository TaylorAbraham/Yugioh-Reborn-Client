import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import './Card.scss';

type CardProps = {
  card: Card;
  highlighted?: boolean;
  remark?: string;
  quantity?: number;
  maxLegalQuantity?: number;
};

const Card = ({
  card,
  highlighted,
  remark,
  quantity,
  maxLegalQuantity,
}: CardProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // If any cards have quantity, we need extra spacing to display the possible extra copies.
    // This applies to all cards with quantities so that they sit evenly with each other.
    <div className={`card ${quantity && 'card--extra-mt'}`}>
      <Typography className={`card__text card__remark ${!remark && 'invisible'}`} variant="body2">
        {remark || 'No Remark'}
      </Typography>
      <div className="card__img-container">
        <a
          href={`https://db.ygoprodeck.com/card/?search=${card.id}`}
          target="_blank"
          rel="noreferrer"
        >
          {quantity && quantity > 2 && (
            <img
              src={card.images[0].image_url}
              className="card__img card__img-duplicate card__img-duplicate-2"
            />
          )}
          {quantity && quantity > 1 && (
            <img src={card.images[0].image_url} className="card__img card__img-duplicate" />
          )}
          <img
            src={card.images[0].image_url}
            className={`card__img card__img-view ${highlighted && 'card__img--highlighted'} ${
              isHovered && 'card__img--hover'
            }`}
          />
          <img
            src={card.images[0].image_url}
            className="card__img card__img-controller"
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          />
        </a>
      </div>
      <Typography className="card__text" variant="body2">
        {card.name}
      </Typography>
    </div>
  );
};

export default Card;
