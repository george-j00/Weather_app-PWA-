import { configureStore } from "@reduxjs/toolkit";
import climatReducer from "./slice";

const store = configureStore({
  reducer: {
    climate: climatReducer,
  },
});

export type AppDispatcher = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
