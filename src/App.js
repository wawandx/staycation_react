import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "screens/LandingPage";
import DetailsPage from "screens/DetailsPage";
import ExampleInputNumber from "screens/ExampleInputNumber";
import ExampleInputDate from "screens/ExampleInputDate";
import ExampleBreadcrumb from "screens/ExampleBreadcrumb";

import "assets/scss/style.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route path="/example-number" component={ExampleInputNumber}></Route>
        <Route path="/example-date" component={ExampleInputDate}></Route>
        <Route path="/example-breadcrumb" component={ExampleBreadcrumb}></Route>
      </Router>
    </div>
  );
};

export default App;
