import React from 'react';
import classnames from 'classnames';

import RadioButton from './RadioButton';

import styles from './RadioButtonsGroup.module.scss';

type RadioButtonsGroup = { className?: string };

const RadioButtonsGroup = ({ className }: RadioButtonsGroup) => (
  <div className={classnames(styles.root, className)}>
    <RadioButton isActive={false} />
    <RadioButton className={styles.radioButton} isActive />
  </div>
);

export default RadioButtonsGroup;
