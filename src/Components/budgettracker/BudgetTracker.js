import React, { useState, useEffect } from 'react';
import './budgetTracker.css';
import { Container } from 'react-bootstrap';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function BudgetTracker() {

  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleName = event => {
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    setAmount(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && amount > 0) {
      const expense = { name, amount }
      setExpenses([...expenses, expense])
      setName('')
      setAmount('')
    } else {
      console.log('Invalid expense name or the amount')
    }
  }

  const handleClearExpenses = () => {
    setExpenses([])
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  return (
    <Container className="budget">
      <h1>Budget Tracker</h1>
      <p>Total Expense:{' '} 
        <span className="amount">
          ${ expenses.reduce((accumulator, currentValue) => {
            return (accumulator += parseInt(currentValue.amount))
          }, 0) }
        </span>
      </p>
      <BudgetForm
        name={name}
        amount={amount}
        handleName={handleName}
        handleAmount={handleAmount}
        handleSubmitForm={handleSubmitForm}
        handleClearExpenses={handleClearExpenses}
      />
      <h3>Expense Log</h3>
      <BudgetList expenses={expenses} />
    </Container>
  )
}
export default BudgetTracker;