// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// Works but we could need more slices. Easier with configureStore
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  // reducer: counterSlice.reducer, // singular! reducer! value can be one reducer
  // Or an object where we map reducers: key - value=different reducer functions
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
