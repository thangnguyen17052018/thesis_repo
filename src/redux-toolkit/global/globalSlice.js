import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../themes/themeData";
const { primaryTheme } = themes;
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    theme: JSON.parse(localStorage.getItem("THEME")) || primaryTheme,
  },
  reducers: {
    setThemeBg: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("THEME", JSON.stringify(action.payload));
    },
  },
});
export const { setThemeBg } = globalSlice.actions;
export default globalSlice.reducer;
