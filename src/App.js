import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

import Home from "./Components/Home";
import Calendar from "./Components/Calendar";
import PackingList from "./Components/PackingList";
import Itinerary from "./Components/Itinerary";
import BudgetTracker from "./Components/BudgetTracker";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Travel Pal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/calendar">Calendar</Nav.Link>
                <Nav.Link href="/packing">Packing List</Nav.Link>
                <Nav.Link href="/itinerary">Itinerary</Nav.Link>
                <Nav.Link href="/budget">Budget Tracker</Nav.Link>
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
