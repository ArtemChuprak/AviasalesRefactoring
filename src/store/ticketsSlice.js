import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearchId = createAsyncThunk(
  'tickets/fetchSearchId',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      if (!response.ok) {
        throw new Error(response.status);
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchTickets = createAsyncThunk(
  'tickets/fetchTickets',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`,
      );
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const tickets = await response.json();
      return tickets;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
    searchId: '',
    isSearch: false,
    isLoading: null,
    error: null,
    stopFetch: false,
    fetchStatus500: 0,
    showTickets: 5,
  },
  reducers: {
    addTickets(state) {
      state.showTickets += 5;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload.searchId;
      state.isSearch = true;
    });
    builder.addCase(fetchSearchId.rejected, (state) => {
      state.error = true;
    });
    builder.addCase(fetchTickets.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchTickets.fulfilled, (state, action) => {
      state.isLoading = !action.payload.stop;
      state.tickets = [...state.tickets, ...action.payload.tickets];
      state.stopFetch = action.payload.stop;
    });
    builder.addCase(fetchTickets.rejected, (state, action) => {
      if (action.payload === '500') {
        state.fetchStatus500 += 1;
      } else {
        state.error = true;
      }
    });
  },
});

export const { addTickets } = ticketsSlice.actions;

export default ticketsSlice.reducer;