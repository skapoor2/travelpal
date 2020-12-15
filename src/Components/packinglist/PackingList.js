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
      </div>
    )
  }
};
export default PackingList;

