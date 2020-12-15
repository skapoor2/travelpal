import React, { Component } from 'react';
import {ListGroup, ListGroupItem, Button, Form} from "react-bootstrap";
//import packingLocalStorage from "src/services/packingLocalStorage.js"
//import styled from "styled-components";

//import './ListItems.css'
class ListItems extends Component {

    handleClick = (key) => {
        this.props.handleTaskClick(key);
    }

    createListItems = (task) => {
    return (<ListGroupItem 
        bsStyle={task.completed ? "success" : "danger"} 
        key={task.key} 
        className="taskItem" 
        onClick={() => {this.handleClick(task.key)} }>{task.task}</ListGroupItem>);
    }
    /*{{tasks}.map((task) => (
                    <div key='default-checkbox' className="mb-3">
                        <Form.Check
                            type="checkbox"
                            id={'${task}'}
                            label={'${task}'}/>
                    </div>
                ))}*/

    render() {
        const tasks = this.props.tasks.map(this.createListItems);
        return (
            <Form>
            <ListGroup className="taskItems">
                {tasks}
            </ListGroup></Form>
        );
    }
}

export default ListItems;
