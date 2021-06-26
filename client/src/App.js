import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import RestaurantDetailsPage from "./routes/RestaurantDetailsPage";
import RestaurantUpdate from "./routes/RestaurantUpdate";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

function App() {
  return (
    <RestaurantsContextProvider>
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
    </RestaurantsContextProvider>
  );
}

export default App;
