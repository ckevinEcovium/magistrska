import { EthProvider } from "./contexts/EthContext";
import { Outlet, Link } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <Outlet />
      </div>
    </EthProvider>
  );
}

export default App;
