import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../features/propertySlice";
import tenantSlice from "../features/tenantSlice";
export const store = configureStore({
  reducer: {
    properties: propertySlice,
    tenants: tenantSlice,
  },
});
