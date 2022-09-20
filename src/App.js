import "./App.css";
import "tippy.js/dist/tippy.css";
import createStore from "redux-zero";
import Header from "components/layout/Header";
import Sidebar from "components/layout/Sidebar";

function App() {
  return (
    <div className="flex flex-col w-full h-screen px-3 App">
      <Header />
      <div className="flex w-full">
        <div className="flex-1 text-4xl text-black">Content</div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
