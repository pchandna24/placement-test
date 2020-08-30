import React from "react";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import Chat from "./Components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/chats/:chatId">
              <Chat />
            </Route>
            <Route path="/">{/* <Chat /> */}</Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
