import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utils/routes';
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage"

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/BubblePage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
