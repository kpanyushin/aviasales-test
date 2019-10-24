import React from 'react';
import classnames from 'classnames';

import styles from './FlightCard.module.scss';

type Segment = {
  origin: string,
  destination: string,
  date: Date,
  stops: string[],
  duration: number,
}

type FlightCardProps = {
  className?: string,
  price?: number,
  carrier?: string,
  segments?: Array<Segment>,
};

const FlightCard = ({
  className,
  price,
  carrier,
  segments,
}: FlightCardProps) => (
  <li className={classnames(styles.root, className)}>
    <div className={styles.header}>
      <p className={styles.price}>{`${price} Р`}</p>
      <img className={styles.logo} alt={carrier} />
    </div>
    {segments && segments.length > 0 && segments.map(({
      date,
      stops,
      origin,
      duration,
      destination,
    }, index) => (
      <div key={index} className={styles.row}>
        <div className={styles.column}>
          <p className={styles.headerRow}>{`${origin} - ${destination}`}</p>
          <p>{new Date(date).toLocaleString()}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.headerRow}>В пути</p>
          <p>{duration}</p>
        </div>
        <div className={styles.column}>
          <p className={styles.headerRow}>{`${stops.length} пересадки`}</p>
          <p className={styles.stop}>{stops.join(', ')}</p>
        </div>
      </div>
    ))}
  </li>
);

export default FlightCard;
