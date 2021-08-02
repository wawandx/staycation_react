import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "screens/LandingPage";
import ExampleInputNumber from "screens/ExampleInputNumber";
import ExampleInputDate from "screens/ExampleInputDate";

import "assets/scss/style.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={ExampleInputDate}></Route>
      </Router>
    </div>
  );
};

export default App;
