import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const Store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});