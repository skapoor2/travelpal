import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Form} from "react-bootstrap";
import './packingList.css'; 


class Item extends Component {

    createListItems = (task) => {
    return (<ListGroupItem 
        variant={(task.completed ? "success" : "light")} 
        key={task.key} 
        className="taskItem" 
        onClick={() => {this.props.handleTaskClick(task.key)} }>{task.task}</ListGroupItem>);
    }

    render() {
        const tasks = this.props.tasks.map(this.createListItems);
        return (
            <Form>
            <ListGroup className="taskItems">
                {tasks}
            </ListGroup>
            </Form>
        );
    }
}

export default Item;
