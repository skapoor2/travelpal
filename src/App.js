import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Itinerary from "./Components/itinerary";
import PackingList from "./Components/packingList";
import BudgetTracker from "./Components/budgetTracker";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/itinerary">Intinerary</Link>
            </li>
            <li>
              <Link to="/packing">Packing List</Link>
            </li>
            <li>
              <Link to="/budget">Budget Tracker</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/itinerary">
              <Itinerary />
            </Route>
            <Route path="/packing">
              <PackingList />
            </Route>
            <Route path="/budget">
              <BudgetTracker />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
