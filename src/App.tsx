import React from 'react';

import Logo from './components/Logo';
import Filters from './components/Filters';
import RadioButtonsGroup from './components/RadioButtonsGroup';

import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Logo className={styles.logo} />
    <Filters />
    <RadioButtonsGroup className={styles.rbGroup} />
  </div>
);

export default App;
