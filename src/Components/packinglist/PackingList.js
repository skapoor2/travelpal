import React, { Component } from 'react';
import { ListGroup, Card, Form, Button, Col } from 'react-bootstrap';
import ToDoItemList from './card.js';
import './packingList.css';


class PackingList extends Component {
  render() {
    return (
      <div className="packing">
        <h1>Packing list content</h1>
        <ToDoItemList />
        {/**<p style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>Solid line-through</p>
        <Card style={{ width: '23rem' }}>
          <Card.Header>Category</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item><Form>
              <Form.Row>
                <Col sm="auto" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Add an item" />
                </Col>
                <Col sm="auto"><Button class="submit"> add item</Button>
                </Col></Form.Row></Form></ListGroup.Item>
          </ListGroup>
    </Card>*/}
      </div>
    )
  }
};
export default PackingList;

