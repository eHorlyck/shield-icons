import simpleClass from "./main";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "",
};
const simpleData = new simpleClass();
console.log(simpleData.getIcon());

let newData = simpleData.getIcon();

export const iconDataSlice = createSlice({
  name: "iconsData",
  initialState,
  reducers: {
    getData: (state) => {
      state.value = simpleData.getIcon();
    },
  },
});

export const { getData } = iconDataSlice.actions;
export default iconDataSlice.reducer;
