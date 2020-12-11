import React, { Component, useState } from 'react';
import './budgetTracker.css';

class BudgetTracker extends Component {
  
  render() {
    return (
      <div className="budget">
        <h1>Budget Tracker</h1>
        <p>Total Budget: $1000</p>
      </div>
    )
  }
}
export default BudgetTracker;