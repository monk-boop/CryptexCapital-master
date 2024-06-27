// src/store/earningsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEarningsMomentum = createAsyncThunk(
  "earnings/fetchEarningsMomentum",
  async (region) => {
    const response = await fetch(
      `http://127.0.0.1:5000/api/earnings_momentum?region=${region}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log("data is ", data);
    return data;
  }
);

const earningsSlice = createSlice({
  name: "earnings",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEarningsMomentum.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEarningsMomentum.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchEarningsMomentum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default earningsSlice.reducer;
