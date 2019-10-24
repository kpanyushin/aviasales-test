import React from 'react';

import Logo from './components/Logo';
import Filters from './components/Filters';
import FlightCard from './components/FlightCard';
import RadioButtonsGroup from './components/RadioButtonsGroup';

import styles from './App.module.scss';

type Segment = {
  origin: string,
  destination: string,
  date: Date,
  stops: string[],
  duration: number,
}

const flights: any[] = [{
  price: 95011,
  carrier: 'FV',
  segments: [{
    origin: 'MOW',
    destination: 'HKT',
    date: '2019-11-03T00:05:00.000Z',
    stops: [
      'SIN',
      'BKK',
      'SHA',
    ],
    duration: 1642,
  },
  {
    origin: 'MOW',
    destination: 'HKT',
    date: '2019-11-23T00:47:00.000Z',
    stops: [
      'AUH',
      'HKG',
      'SIN',
    ],
    duration: 1968,
  }],
}, {
  price: 33971,
  carrier: 'S7',
  segments: [{
    origin: 'MOW',
    destination: 'HKT',
    date: '2019-11-03T02:44:00.000Z',
    stops: [
      'HKG',
      'SIN',
    ],
    duration: 669,
  },
  {
    origin: 'MOW',
    destination: 'HKT',
    date: '2019-11-23T00:47:00.000Z',
    stops: [
      'KUL',
    ],
    duration: 1937,
  }],
}];

const App = () => (
  <div className={styles.app}>
    <Logo className={styles.logo} />
    <Filters />
    {flights.map((flight, index) => <FlightCard key={index} {...flight} />)}
    <RadioButtonsGroup className={styles.rbGroup} />
  </div>
);

export default App;
