import { createSlice } from '@reduxjs/toolkit';

const filterTicketsSlice = createSlice({
  name: 'filterTickets',
  initialState: {
    toggle: {
      transfers: false,
      withoutTransfers: true,
      oneTransfer: false,
      twoTransfer: false,
      threeTransfer: false,
    },
  },
  reducers: {
    transferFilter(state, action) {
      switch (action.payload.id) {
        case 'transfers':
          if (!action.payload.isChecked) {
            state.toggle.transfers = true;
            state.toggle.withoutTransfers = true;
            state.toggle.oneTransfer = true;
            state.toggle.twoTransfer = true;
            state.toggle.threeTransfer = true;
          } else {
            state.toggle.transfers = false;
            state.toggle.withoutTransfers = false;
            state.toggle.oneTransfer = false;
            state.toggle.twoTransfer = false;
            state.toggle.threeTransfer = false;
          }
          break;
        case 'withoutTransfers':
          state.toggle.withoutTransfers = !state.toggle.withoutTransfers;
          break;
        case 'oneTransfer':
          state.toggle.oneTransfer = !state.toggle.oneTransfer;
          break;
        case 'twoTransfer':
          state.toggle.twoTransfer = !state.toggle.twoTransfer;
          break;
        case 'threeTransfer':
          state.toggle.threeTransfer = !state.toggle.threeTransfer;
          break;
        default:
          state.toggle.transfers = false;
          state.toggle.withoutTransfers = false;
          state.toggle.oneTransfer = false;
          state.toggle.twoTransfer = false;
          state.toggle.threeTransfer = false;
      }
      if (
        !state.toggle.transfers &&
        state.toggle.withoutTransfers &&
        state.toggle.oneTransfer &&
        state.toggle.twoTransfer &&
        state.toggle.threeTransfer
      ) {
        state.toggle.transfers = true;
      }
      if (
        state.toggle.transfers &&
        (!state.toggle.withoutTransfers ||
          !state.toggle.oneTransfer ||
          !state.toggle.twoTransfer ||
          !state.toggle.threeTransfer)
      ) {
        state.toggle.transfers = false;
      }
    },
  },
});

export const { transferFilter } = filterTicketsSlice.actions;

export default filterTicketsSlice.reducer;