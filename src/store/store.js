import { configureStore } from "@reduxjs/toolkit";
import earningsReducer from "./earningsSlice";
import sectorEarningsReducer from "./sectorSlice"; // Add this import

export const store = configureStore({
  reducer: {
    earnings: earningsReducer,
    sectorEarnings: sectorEarningsReducer,
  },
});
