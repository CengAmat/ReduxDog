import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/dogs/dogsApiSlice';

// Create Redux Store
export const store = configureStore({
    reducer: {      // this will automaticly call combineReducers - No need combineReducers any more - 
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;