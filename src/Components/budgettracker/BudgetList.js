import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const BudgetList = ({ expenses }) => (
  <div>
    <ListGroup>
      {expenses.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} - ${item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
)

export default BudgetList