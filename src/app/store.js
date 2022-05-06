import { configureStore } from "@reduxjs/toolkit";
import iconsdataReducer from "../services/data";

export const store = configureStore({
  reducer: {
    iconsdata: iconsdataReducer,
  },
});
