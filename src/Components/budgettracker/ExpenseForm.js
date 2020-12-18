import React from 'react';
import { Form, Row } from 'react-bootstrap';

// form for adding a new expense and editing an expense
const ExpenseForm = ({ 
  date, 
  name, 
  category,
  categories, 
  amount, 
  handleDate, 
  handleName, 
  handleCategory, 
  handleAmount, 
  }) => (
  <Form>
    <Form.Group as={Row}>
      <Form.Label>
        Date
      </Form.Label>
      <Form.Control 
        type="date" 
        name="date"
        id="expenseDate"
        value={date}
        onChange={handleDate}
      />
    </Form.Group>
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
        Category
      </Form.Label>
      <Form.Control
        as="select"
        defaultValue={category}
        name="category"
        id="expenseCategory"
        value={category.value}
        onChange={handleCategory}
      >
        {categories.map(categoryOption => (
          <option value={categoryOption}>{categoryOption}</option>
        ))}
      </Form.Control>
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
  </Form>
)
export default ExpenseForm