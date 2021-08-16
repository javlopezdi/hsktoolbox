import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" exact component={SignUp} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
