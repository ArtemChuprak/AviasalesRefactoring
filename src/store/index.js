import { configureStore } from '@reduxjs/toolkit';
import filterTicketsSlice from './filterTicketsSlice';
import sortTicketsSlice from './sortTicketsSlice';
import ticketsSlice from './ticketsSlice';

export default configureStore({
  reducer: {
    tickets: ticketsSlice,
    filter: filterTicketsSlice,
    sort: sortTicketsSlice,
  },
});