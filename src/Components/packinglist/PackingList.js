import React, { Component } from 'react';
import { ListGroup, Card, Form, Button, Col } from 'react-bootstrap';
import './packingList.css';

class PackingList extends Component {
  /*constructor(props){
    super(props);

    this.state = {
      list: [],
      pendingItem: ""
    };
  }
  handleItemInput = e => {
    this.setState({
      pendingItem: e.target.value
    });
  }
  newItemSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      list:[
        {
          name:this.state.pendingItem,
        },
        ...this.state.list
      ],
      pendingItem:""
    });
  };*/
  
  render() {
    return (
      <div className="packing">
        <h1>Packing list content</h1>
        {/**<form onSubmit={this.newItemSubmitHandler} className="todoinput">
          <input 
            className="input"
            type="text"
            onChange={this.handleItemInput}
            value={this.state.pendingItem}
            placeholder="Add an item"
            />
            <button type="submit" name="submit" value="submit">Add</button>
        </form>
        <div>{this.state.pendingItem}</div>
        <ul>
        {props.list.map((item, index) => (
          <ListItem
            key={index}
            item={item.name}
          />
        ))}
      </ul>**/}
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
    </Card>
      </div>
    )
  }
}
export default PackingList;