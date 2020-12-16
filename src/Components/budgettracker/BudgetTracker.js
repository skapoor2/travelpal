import React, { useState, useEffect } from 'react';
import './budgetTracker.css';
import { Container, Button, Popover, OverlayTrigger, Row } from 'react-bootstrap';
import BudgetForm from './BudgetForm';
import BudgetList from './BudgetList';

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function BudgetTracker() {

  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Other');

  const handleName = event => {
    setName(event.target.value)
  }
  
  const handleAmount = event => {
    setAmount(event.target.value)
  }

  const handleCategory = event => {
    setCategory(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && amount > 0) {
      const expense = { name, amount, category }
      setExpenses([...expenses, expense])
      setName('')
      setAmount('')
      setCategory('')
    } else {
      alert('Invalid expense name or amount!')
    }
  }

  const handleClearExpenses = () => {
    if ( expenses.length > 0 )
      setExpenses([])
    else
      alert('There are no expenses logged!')
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">How to use the Budget Tracker</Popover.Title>
      <Popover.Content>
        Enter the name, amount, and category of an expense during your trip. Click the "Add Entry" button to add the purchase to your expense log. If you want to delete all entries, you can select "Clear All."
      </Popover.Content>
    </Popover>
  )

  return (
    <Container className="budget">
      <Row className="title">
        <h1>Budget Tracker</h1>
        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
          <Button className="how-to-btn" variant="light">?</Button>
        </OverlayTrigger>
      </Row>
      <p>Total Spent:{' '} 
        <span className="amount">
          ${ expenses.reduce((accumulator, currentValue) => {
            return (accumulator += parseFloat(currentValue.amount))
          }, 0) }
        </span>
      </p>
      <Container className="form">
        <BudgetForm
          name={name}
          amount={amount}
          category={category}
          handleName={handleName}
          handleAmount={handleAmount}
          handleCategory={handleCategory}
          handleSubmitForm={handleSubmitForm}
        />
      </Container>
      <h3>Expense Log</h3>
      <BudgetList expenses={expenses} />
      <Button className="button" variant="danger" type='submit' color='danger' onClick={handleClearExpenses}>
        Clear All
      </Button>
    </Container>
  )
}
export default BudgetTracker;