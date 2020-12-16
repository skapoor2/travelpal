import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const BudgetList = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(expense => (
        <ListGroupItem key={expense.id}>
          {expense.name} - ${expense.amount} ({expense.category})
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default BudgetList