import "./App.css";
import "tippy.js/dist/tippy.css";
import Header from "components/layout/Header";
import Sidebar from "components/layout/Sidebar";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/Globalstyles";
import Main from "components/layout/Main";

function App() {
  const { theme } = useSelector((state) => state.global);
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div className="flex flex-col w-full h-screen px-3 App">
          <Header />
          <div className="flex w-full">
            <Main />
            <Sidebar />
          </div>
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
