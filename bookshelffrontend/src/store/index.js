import { configureStore } from "@reduxjs/toolkit";
import bookReducerSlice from "./bookReducerSlice";

const store = configureStore({
  reducer: { book: bookReducerSlice.reducer },
});

export default store;
