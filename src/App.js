import React from "react";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Chat from "./Components/Chat";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
