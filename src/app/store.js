import { configureStore } from "@reduxjs/toolkit";
import iconsDataReducer from "../services/iconsDataSlice";

export const store = configureStore({
  reducer: {
    iconsData: iconsDataReducer,
  },
});
