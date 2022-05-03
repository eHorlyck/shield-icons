import simpleClass from "./main";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const data = new simpleClass();
console.log(data.getIcon());

export const iconsDataSlice = createSlice({
  name: "iconsdata",
  initialState,
  reducer: {
    getData: (state) => {
      state.value = data.getIcon();
    },
  },
});

export const { getData } = iconsDataSlice.actions;
export default iconsDataSlice.reducer;
