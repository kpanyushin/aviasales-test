import React from 'react';

import Logo from './components/Logo';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Logo />
    </div>
  );
}

export default App;
