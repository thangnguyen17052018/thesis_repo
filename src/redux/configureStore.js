/* store.js */
import createStore from "redux-zero";
import { themes } from "themes/themeData";
const initialState = {
  count: 1,
  theme: themes.primaryTheme,
};
const store = createStore(initialState);

export default store;
