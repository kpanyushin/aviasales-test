import React from 'react';

import Logo from './components/Logo';
import RadioButtonsGroup from './components/RadioButtonsGroup';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Logo className={styles.logo} />
    <RadioButtonsGroup className={styles.rbGroup} />
  </div>
);

export default App;
