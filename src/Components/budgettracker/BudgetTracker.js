import React, { useState, useEffect } from 'react';
import './budgetTracker.css';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Popover, 
  OverlayTrigger, 
  Form, 
  Table,
  Modal 
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import ExpenseForm from './ExpenseForm';

const TRIP_BUDGET = localStorage.getItem('budget')
  ? JSON.parse(localStorage.getItem('budget'))
  : '0'

const ALL_EXPENSES = localStorage.getItem('expenses')
  ? JSON.parse(localStorage.getItem('expenses'))
  : []

function BudgetTracker() {

  const [budget, setBudget] = useState(TRIP_BUDGET);
  const [expenses, setExpenses] = useState(ALL_EXPENSES);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Other');
  const [amount, setAmount] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);

  const categories = ['Food', 'Shopping', 'Entertainment', 'Transportation', 'Lodging', 'Other'];

  const handleDate = event => {
    setDate(event.target.value)
  }
  
  const handleName = event => {
    setName(event.target.value)
  }

  const handleCategory = event => {
    setCategory(event.target.value)
  }

  const handleAmount = event => {
    setAmount(event.target.value)
  }

  const handleBudget = event => {
    setBudget(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    if ( date !== '' && name !== '' && category !== '' && amount > 0 ) {
      const expense = { date, name, amount, category }
      setExpenses([...expenses, expense])
      setDate('')
      setName('')
      setCategory(category)
      setAmount('')
    } else {
      alert('Invalid expense! You must input a date, name, category, and amount.')
    }
  }

  const handleRemoveExpense = (e) => {
    setExpenses(expenses.filter(expense => expense !== e));
  }

  const handleClearExpenses = () => {
    if ( expenses.length > 0 )
      setExpenses([])
    else
      alert('There are no expenses logged!')
  }

  const handleCloseEditForm = () => setShowEditForm(false);

  const handleShowEditForm = () => setShowEditForm(true);

  const handleSaveEditForm = event => {
    event.preventDefault()
    if ( date !== '' && name !== '' && category !== '' && amount > 0 ) {
      setDate(date)
      setName(name)
      setCategory(category)
      setAmount(amount)
      setShowEditForm(false)
    } else {
      alert('Invalid expense! You must input a date, name, category, and amount.')
    }
  }

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
    localStorage.setItem('budget', JSON.stringify(budget))
  })

  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">How to use the Budget Tracker</Popover.Title>
      <Popover.Content>
        Enter the name, amount, and category of an expense during your trip. Click the "Add Entry" button to add the purchase to your expense log. If you want to delete all entries, you can select "Clear All."
      </Popover.Content>
    </Popover>
  )

  return (
    <Container className="budget-tracker">
      <Row className="title">
        <h1>Budget Tracker</h1>
        <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
          <Button className="how-to-btn" variant="light">?</Button>
        </OverlayTrigger>
      </Row>
      <Container className="amounts">
        <span className="budget">
          <Form.Group as={Row}>
            <Form.Label style={{fontSize: '24px', marginTop: '8px', marginRight: '5px'}}>
              Trip Budget: $
            </Form.Label>
            <Form.Control 
              type="number" 
              name="budget"
              id="tripBudget"
              placeholder="0.00"
              value={budget}
              onChange={handleBudget}
              style={{width: '5em', fontSize: '24px'}}
            />
          </Form.Group>
        </span>
        <p>Total Spent:{' '} 
          <span className="spent">
            ${ expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseFloat(currentValue.amount))
            }, 0) }
          </span>
        </p>
        <p>Amount Remaining:{' '} 
          <span className="remaining">
            ${ budget - expenses.reduce((accumulator, currentValue) => {
              return (accumulator += parseFloat(currentValue.amount))
            }, 0) }
          </span>
        </p>
      </Container>
      <Row>
        <Col>
          <Container className="form">
            <h3>New Expense</h3><br/>
            <ExpenseForm
              date={date}
              name={name}
              category={category}
              categories={categories}
              amount={amount}
              handleDate={handleDate}
              handleName={handleName}
              handleCategory={handleCategory}
              handleAmount={handleAmount}
            />
            <Button className="button" type="submit" color="primary" onClick={handleSubmitForm}>
              Add Entry
            </Button>
          </Container>
        </Col>
        <Col>
          {categories.map(categoryOption => (
            <Container className="category">
              <h4>{categoryOption}</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {expenses.filter(expense => expense.category === categoryOption)
                    .map(expense => (
                      <tr>
                        <td>{expense.date}</td>
                        <td>{expense.name}</td>
                        <td>${expense.amount}</td>
                        <td>
                          <span className="edit-icon" onClick={handleShowEditForm}><Icon.PencilFill /></span>
                          <span className="delete-icon" name={expense.name} value={expense.name} onClick={handleRemoveExpense}><Icon.TrashFill /></span>
                          <Modal show={showEditForm} onHide={handleCloseEditForm}>
                            <Modal.Header closeButton>
                              <Modal.Title>Edit Expense</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Container>
                                <ExpenseForm
                                  date={expense.date}
                                  name={expense.name}
                                  category={expense.category}
                                  categories={categories}
                                  amount={expense.amount}
                                  handleDate={handleDate}
                                  handleName={handleName}
                                  handleCategory={handleCategory}
                                  handleAmount={handleAmount}
                                />
                              </Container>
                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleCloseEditForm}>
                                Close
                              </Button>
                              <Button variant="primary" onClick={handleSaveEditForm}>
                                Save
                              </Button>
                            </Modal.Footer>
                          </Modal>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>     
              </Table>
              <span>
                Total: $
                {expenses.filter(expense => expense.category === categoryOption)
                .reduce((accumulator, currentValue) => {
                  return (accumulator += parseFloat(currentValue.amount))
                }, 0)}
              </span>      
            </Container>
          ))}
          <Button className="button" variant="danger" type='submit' color='danger' onClick={handleClearExpenses}>
            Clear All
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
export default BudgetTracker;