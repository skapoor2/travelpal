import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const BudgetForm = ({ name, amount, category, handleName, handleAmount, handleCategory, handleSubmitForm }) => (
  <Form>
    <Form.Group as={Row}>
      <Form.Label>
        Name of Expense
      </Form.Label>
      <Form.Control 
        type="text" 
        name="name"
        id="expenseName"
        placeholder="Expense description"
        value={name}
        onChange={handleName}
      />
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label>
        $ Amount
      </Form.Label>
      <Form.Control 
        type="number"
        name="amount"
        id="expenseAmount"
        placeholder="0.00"
        value={amount}
        onChange={handleAmount}
      />
    </Form.Group>
    <Form.Group as={Row}>
      <Form.Label>
        Category
      </Form.Label>
      <Form.Control
        as="select"
        defaultValue="Other"
        name="category"
        id="expenseCategory"
        value={category.value}
        onChange={handleCategory}
      >
        <option value="Food">Food</option>
        <option value="Shopping">Shopping</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Lodging">Lodging</option>
        <option value="Other">Other</option>
      </Form.Control>
    </Form.Group>
    <Button className="button" type="submit" color="primary" onClick={handleSubmitForm}>
      Add Entry
    </Button>
  </Form>
)

export default BudgetForm