import simpleClass from "./main";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const simpleData = new simpleClass();
console.log(simpleData.getIcon());

let newData = simpleData.getIcon();
export const iconsDataSlice = createSlice({
  name: "iconsdata",
  initialState,
  reducers: {
    getData: (state) => {
      state.value = newData;
    },
  },
});

export const { getData } = iconsDataSlice.actions;
export default iconsDataSlice.reducer;
