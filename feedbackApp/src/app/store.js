import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../assets/features/feedbackslice';

export const store = configureStore({
  reducer: {
    feedback: feedbackReducer,
  },
});