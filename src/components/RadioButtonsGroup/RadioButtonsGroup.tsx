import React from 'react';
import classnames from 'classnames';

import RadioButton from './RadioButton';

import styles from './RadioButtonsGroup.module.scss';

type RadioButtonsGroupProps = { className?: string };

const radioGroup: Array<string> = ['Самый дешевый', 'самый быстрый'];

const RadioButtonsGroup = ({ className }: RadioButtonsGroupProps) => (
  <div className={classnames(styles.root, className)}>
    {radioGroup.map((item, index) => (
      <RadioButton
        key={item}
        className={styles.radioButton}
        message={item}
        isActive={index === 0}
      />
    ))}
  </div>
);

export default RadioButtonsGroup;
