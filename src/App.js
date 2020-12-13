import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

import Home from "./Components/home/Home";
import Calendar from "./Components/calendar/Calendar";
import PackingList from "./Components//packinglist/PackingList";
import Itinerary from "./Components/itinerary/Itinerary";
import BudgetTracker from "./Components/budgettracker/BudgetTracker";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar className="navbar" expand="lg" sticky="top">
            <Navbar.Brand className="nav-brand" href="/">Travel Pal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link className="nav-link" href="/">Home</Nav.Link>
                <Nav.Link className="nav-link" href="/calendar">Calendar</Nav.Link>
                <Nav.Link className="nav-link" href="/packing">Packing List</Nav.Link>
                <Nav.Link className="nav-link" href="/itinerary">Itinerary</Nav.Link>
                <Nav.Link className="nav-link" href="/budget">Budget Tracker</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/packing">
              <PackingList />
            </Route>
            <Route path="/itinerary">
              <Itinerary />
            </Route>
            <Route path="/budget">
              <BudgetTracker />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
