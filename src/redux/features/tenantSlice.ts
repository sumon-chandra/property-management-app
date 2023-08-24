import { createSlice } from "@reduxjs/toolkit";
import { InitialTenantTypes } from "./../../types";

const initialState: InitialTenantTypes = {
  tenants: [],
};

const tenantSlice = createSlice({
  name: "tenant",
  initialState,
  reducers: {
    getTenants: (state, action) => {
      state.tenants = action.payload;
    },
  },
});
export const { getTenants } = tenantSlice.actions;
export default tenantSlice.reducer;
