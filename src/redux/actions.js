/* actions.js */
const actions = (store) => ({
  increment: (state) => ({ count: state.count + 1 }),
  setThemeBg: (state) => ({ theme: state.newTheme }),
});

export default actions;
