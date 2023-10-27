import { createSlice } from '@reduxjs/toolkit';

const sortTicketsSlice = createSlice({
  name: 'sortTickets',
  initialState: {
    tabs: {
      cheap: true,
      fast: false,
      optimal: false,
    },
  },
  reducers: {
    onTabs(state, action) {
      if (action.payload.id === 'cheap') {
        state.tabs.cheap = true;
        state.tabs.fast = false;
        state.tabs.optimal = false;
      }
      if (action.payload.id === 'fast') {
        state.tabs.fast = true;
        state.tabs.optimal = false;
        state.tabs.cheap = false;
      }
      if (action.payload.id === 'optimal') {
        state.tabs.optimal = true;
        state.tabs.fast = false;
        state.tabs.cheap = false;
      }
    },
  },
});

export const { onTabs } = sortTicketsSlice.actions;

export default sortTicketsSlice.reducer;