import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import RestaurantDetailsPage from "./routes/RestaurantDetailsPage";
import RestaurantUpdate from "./routes/RestaurantUpdate";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/restaurants/:id/update"
            component={RestaurantUpdate}
          />
          <Route
            exact
            path="/restaurants/:id"
            component={RestaurantDetailsPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
