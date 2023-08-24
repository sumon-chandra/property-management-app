import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { InitialPropertyTypes } from "./../../types";

// Initial State
const initialState: InitialPropertyTypes = {
  properties: [],
  status: "idle",
};

// Create Thunk for Fetching data
export const fetchProperties = createAsyncThunk(
  "property/fetchData",
  async () => {
    const response = await fetch("./data.json");
    const properties = await response.json();
    return properties;
  }
);

// Create slice for properties
const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProperties.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchProperties.fulfilled, (state, action) => {
      state.status = "success";
      state.properties = action.payload;
    });
    builder.addCase(fetchProperties.rejected, (state) => {
      state.status = "failed";
    });
  },
});

// export const {} = propertySlice.actions;
export default propertySlice.reducer;
