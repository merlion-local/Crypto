import { configureStore } from '@reduxjs/toolkit';
import blockReducer from './blockSlice';

export const store = configureStore({
  reducer: {
    block: blockReducer,
  },
});

// Получаем типы состояния и диспатча из store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;