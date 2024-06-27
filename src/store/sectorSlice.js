import { createSlice } from "@reduxjs/toolkit";
//import { useNavigate } from "react-router-dom";

const initialState = {
  data: null,
};

const sectorEarningsSlice = createSlice({
  name: "SectorEarningsGrid",
  initialState,
  reducers: {
    setSectorEarnings(state, action) {
      console.log("Payload received in setSectorEarnings: ", action.payload);
      return { ...state, data: action.payload };
    },
  },
});

export const { setSectorEarnings } = sectorEarningsSlice.actions;
export default sectorEarningsSlice.reducer;

export function fetchSectorDetails(sector, field, navigate) {
  return async function fetchSectorDetailsThunk(dispatch, getState) {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/sector/${encodeURIComponent(
          sector
        )}/${encodeURIComponent(field)}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("result for the sectoral fetch is:", result);
      dispatch(setSectorEarnings(result));
      navigate(`/api/sector/${sector}/${field}`, {
        state: { detail: result },
      });
      //dispatch(setSectorEarnings({ data: result }));
    } catch (error) {
      console.log("error is", error);
    }
  };
}
