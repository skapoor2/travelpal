import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'

import Home from "./Components/home";
import Itinerary from "./Components/itinerary";
import PackingList from "./Components/packingList";
import BudgetTracker from "./Components/budgetTracker";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/home">Travel Pal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/itinerary">Itinerary</Nav.Link>
              <Nav.Link href="/packing">Packing List</Nav.Link>
              <Nav.Link href="/budget">Budget Tracker</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/itinerary">
            <Itinerary />
          </Route>
          <Route path="/packing">
            <PackingList />
          </Route>
          <Route path="/budget">
            <BudgetTracker />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
