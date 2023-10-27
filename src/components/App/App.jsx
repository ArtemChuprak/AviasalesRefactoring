import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PacmanLoader } from 'react-spinners';

import styles from './App.module.scss';
import Logo from './Logo.png';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';
import ListTickets from '../ListTickets/ListTickets';
import { fetchSearchId, fetchTickets } from '../../store/ticketsSlice';
import * as data from '../../store/selectors';
import useNetworkState from '../../utilites/useNetworkState';

function App() {
  const dispatch = useDispatch();
  const id = useSelector(data.selectSearchId);
  const stopFetch = useSelector(data.selectStopFetch);
  const isSearch = useSelector(data.selectIsSearch);
  const tickets = useSelector(data.selectTickets);
  const fetchStatus500 = useSelector(data.selectFetchStatus500);
  const isLoading = useSelector(data.selectIsLoading);

  useEffect(() => {
    dispatch(fetchSearchId());
    return () => {};
  }, []);

  useEffect(() => {
    if (!stopFetch && isSearch) {
      dispatch(fetchTickets(id));
    }
  }, [dispatch, id, stopFetch, isSearch, tickets, fetchStatus500]);

  const isOnline = useNetworkState();
  const isNetwork = !isOnline ? (
    <div className={styles.network}>
      You are offline. Please check your connectivity and try again.
    </div>
  ) : null;

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={Logo} alt="Логотип" />
      </div>
      {isNetwork}
      <div className={styles.content}>
        <Filter />
        <div>
          <Tabs />
          
          <PacmanLoader
            loading={isLoading}
            color="rgb(33, 150, 243)"
            className={styles.override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={1}
            
          />
          <ListTickets tickets={tickets} />
        </div>
      </div>
    </div>
  );
}

export default App;