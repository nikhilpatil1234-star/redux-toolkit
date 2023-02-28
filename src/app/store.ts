import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import { dogsApiCallSlice } from "../features/dogs/dogs-api-calls";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApiCallSlice.reducerPath]: dogsApiCallSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiCallSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
