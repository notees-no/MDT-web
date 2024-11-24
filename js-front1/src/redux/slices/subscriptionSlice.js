import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../api/axios';
// Async thunk для загрузки подписок
export const fetchSubscriptions = createAsyncThunk(
  'subscriptions/fetchSubscriptions',
  async (_, { rejectWithValue }) => {
    try {
      console.log('Fetching subscriptions...');
      const response = await axios.get('/api/subscriptions');
      console.log('Subscriptions response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const addSubscription = createAsyncThunk(
  'subscriptions/addSubscription',
  async (subscription, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/api/subscriptions', subscription);
      dispatch(fetchSubscriptions()); // Перезагрузка списка после добавления
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk для удаления подписки
export const deleteSubscription = createAsyncThunk(
  'subscriptions/deleteSubscription',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/api/subscriptions/${id}`);
      dispatch(fetchSubscriptions()); // Перезагрузка списка после удаления
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptions.pending, (state) => {
        console.log('Fetching subscriptions - pending');
        state.status = 'loading';
      })
      .addCase(fetchSubscriptions.fulfilled, (state, action) => {
        console.log('Fetching subscriptions - fulfilled', action.payload);
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSubscriptions.rejected, (state, action) => {
        console.log('Fetching subscriptions - rejected', action.payload);
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

// Селекторы
export const selectAllSubscriptions = (state) => state.subscriptions.items;
export const selectSubscriptionsStatus = (state) => state.subscriptions.status;
export const selectSubscriptionsError = (state) => state.subscriptions.error;

export default subscriptionSlice.reducer;