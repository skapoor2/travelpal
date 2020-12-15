import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const BudgetForm = ({ name, amount, handleName, handleAmount, handleSubmitForm, handleClearExpenses }) => (
  <Form>
    <Form.Group as={Row}>
      <Form.Label column sm="2">
        Name of Expense
      </Form.Label>
      <Col sm="6">
        <Form.Control 
          type="text" 
          name="name"
          id="expenseName"
          placeholder="Expense description"
          value={name}
          onChange={handleName}
        />
      </Col>
  </Form.Group>
  <Form.Group as={Row}>
      <Form.Label column sm="2">
        $ Amount
      </Form.Label>
      <Col sm="6">
        <Form.Control 
          type="number"
          name="amount"
          id="expenseAmount"
          placeholder="0.00"
          value={amount}
          onChange={handleAmount}
        />
      </Col>
  </Form.Group>
  <Button className="button" type="submit" color="primary" onClick={handleSubmitForm}>
    Add
  </Button>
  <Button className="button" variant="danger" type='submit' color='danger' onClick={handleClearExpenses}>
    Clear
  </Button>
</Form>
)

export default BudgetForm