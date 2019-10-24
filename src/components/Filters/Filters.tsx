import React from 'react';
import classnames from 'classnames';

import Filter from './Filter';

import styles from './Filters.module.scss';

type FiltersProps = { className?: string };

const connects: Array<string> = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

const Filters = ({
  className,
}: FiltersProps) => (
  <ul className={classnames(styles.root, className)}>
    {connects.map(item => (
      <Filter key={item} message={item} isActive={item === 'Все'} />
    ))}
  </ul>
);

export default Filters;
