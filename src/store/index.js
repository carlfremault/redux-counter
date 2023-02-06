// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // Action still exists as param, we just don't need to specify if not needed
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// Works but we could need more slices. Easier with configureStore
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: counterSlice.reducer, // singular! reducer! value can be one reducer
  // Or an object where we map reducers: key - value=different reducer functions
  // reducer: {
  //  counter: counterSlice.reducer,
  // },
});

// To access reducers? via 'actions' object on slice
export const counterActions = counterSlice.actions;
export default store;
