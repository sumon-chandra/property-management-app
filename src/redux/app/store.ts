import { configureStore } from "@reduxjs/toolkit";
import propertySlice from "../features/propertySlice";
export const store = configureStore({
  reducer: propertySlice,
});
