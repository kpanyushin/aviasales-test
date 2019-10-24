import React from 'react';
import classnames from 'classnames';

import styles from './RadioButton.module.scss';

type RadioButtonProps = {
  className?: string,
  isActive: boolean,
};

const RadioButton = ({
  className,
  isActive,
}: RadioButtonProps) => (
  <div className={classnames(styles.root, className, { [styles.isActive]: isActive })}>
    RadioButton
  </div>
);

export default RadioButton;
