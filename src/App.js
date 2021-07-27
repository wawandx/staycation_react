import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "screens/LandingPage";

import "assets/scss/style.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
};

export default App;
