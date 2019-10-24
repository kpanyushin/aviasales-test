import React from 'react';
import classnames from 'classnames';

import styles from './Filter.module.scss';

type FilterProps = {
  className?: string,
  isActive: boolean,
  message: string,
};

const checkMark: JSX.Element = (
  <svg width="12" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.286 8L0 4.161 1.209 3.08l3.077 2.748L10.79 0 12 1.09 4.286 8z" fill="#2196F3" />
  </svg>
);

const Filter = ({
  className,
  isActive,
  message,
}: FilterProps) => (
  <li className={classnames(styles.root, className)}>
    <label className={styles.label}>
      <input className={styles.checkboxHidden} type="checkbox" />
      <div className={classnames(styles.checkboxVisible, { [styles.isActive]: isActive })}>
        {isActive && checkMark}
      </div>
      <span>{message}</span>
    </label>
  </li>
);

export default Filter;
