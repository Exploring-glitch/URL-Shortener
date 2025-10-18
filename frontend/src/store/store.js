//Redux setup: store folder and main.jsx
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;