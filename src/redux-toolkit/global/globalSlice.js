import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../themes/themeData";
const { primaryTheme } = themes;
export const globalSlice = createSlice({
  name: "global",
  initialState: {
    theme: JSON.parse(localStorage.getItem("THEME")) || primaryTheme,
    showEditEvent: false,
  },
  reducers: {
    setThemeBg: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("THEME", JSON.stringify(action.payload));
    },
    setShowEditEvent: (state, action) => {
      state.showEditEvent = action.payload;
    },
  },
});
export const { setThemeBg, setShowEditEvent } = globalSlice.actions;
export default globalSlice.reducer;
