import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./Component/UserList";
import { Switch, Route } from "react-router-dom";
import Home from "./Component/Home";
import Navb from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <Navb />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route ecact path="/users" component={UserList} />
      </Switch>
    </div>
  );
}

export default App;
