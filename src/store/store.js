import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { basketSlice } from './basket';


export const store = configureStore({
    reducer: {
        basket: basketSlice.reducer,
        auth: authSlice.reducer,
    },
})