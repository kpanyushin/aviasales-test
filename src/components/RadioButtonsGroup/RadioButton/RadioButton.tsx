import React from 'react';
import classnames from 'classnames';

import styles from './RadioButton.module.scss';

type RadioButtonProps = {
  className?: string,
  isActive: boolean,
  message: string,
};

const RadioButton = ({
  className,
  isActive,
  message,
}: RadioButtonProps) => (
  <div className={classnames(styles.root, className, { [styles.isActive]: isActive })}>
    {message}
  </div>
);

export default React.memo(RadioButton);
