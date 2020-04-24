import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utils/routes';
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage"
import { ImageBackground } from "./styles/index"

function App() {
  return (
    <Router>
      <ImageBackground>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/BubblePage" component={BubblePage} />
      </ImageBackground>
    </Router>
  );
}

export default App;
