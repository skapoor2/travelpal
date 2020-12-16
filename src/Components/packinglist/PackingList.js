
import React, { Component } from "react";
import { Popover, ProgressBar, Button, OverlayTrigger, Container, Row } from "react-bootstrap";
import Edit from "./edit.js";
import Item from "./item.js";
import './packingList.css';

//Used https://github.com/prabhath6/to-do-list-react-bootstrap/tree/master/src when developing packing list to help with set-up/errors. 
//It was used as a sort of blueprint for the code for the packing list, with a lot of the helper functions being used to help set up the input system.
//Several elements like the storage, styling, and even changes to the helper functions took place after using the documentation to build a steady foundation. 

class packingList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            taskList: [],
            progress: 0 
        }
    }

    componentDidMount(){
        const packingData = JSON.parse(localStorage.getItem("taskList"));
        const packingProgress = JSON.parse(localStorage.getItem("progress"));
        console.log(packingData);
        if (localStorage.getItem("taskList")) {
          this.setState({
            taskList:packingData,
            progress:packingProgress
          })
        }
      }

    updateTaskList = (taskValue) => {
        if (taskValue !== ''){
        const prevTaskList = this.state.taskList.slice();
        const updatedTaskList = [...prevTaskList, ...[{ key: Date.now(), task: taskValue, completed: false }]];
        const computeUpdatedProgress = this.computeProgress(updatedTaskList);
        this.setState({
            progress: computeUpdatedProgress,
            taskList: updatedTaskList,
        })
        localStorage.setItem("taskList", JSON.stringify(updatedTaskList))
        localStorage.setItem("progress", JSON.stringify(computeUpdatedProgress))
        } else {
        alert('Invalid Item');
        }
    }

    computeProgress(taskList) {
        let completed = 0;
        taskList.forEach(task => {
            if(task.completed) {
                completed++;
            }
        });

        const progress = (completed / taskList.length).toFixed(2);
        return progress * 100;
    }

    handleTaskClick = (key) => {
        const prevTaskList = this.state.taskList.slice();
        const completedTasks = prevTaskList.map(task => {
            if(task.key === key) {
                task.completed = !task.completed;
                task.variant = "light"
            }
            task.variant = "success"
            return task;
        });
        const computeUpdatedProgress = this.computeProgress(completedTasks);

        this.setState({
            progress: computeUpdatedProgress,
            taskList: completedTasks,
        })
        localStorage.setItem("taskList", JSON.stringify(completedTasks))
        localStorage.setItem("progress", JSON.stringify(computeUpdatedProgress))
    }

    handleCompletedTasks = () => {
        const prevTaskList = this.state.taskList.slice();
        const completed = prevTaskList.filter(task => task.completed);
        const unCompletedTasks = prevTaskList.filter(task => !task.completed);
        if (completed.length !== 0){
        this.setState({
            taskList: unCompletedTasks,
            progress: 0
        })
        localStorage.setItem("taskList", JSON.stringify(unCompletedTasks))
        localStorage.setItem("progress", JSON.stringify(0))}
        else {
            alert("There are no completed items");
        }
    }


    render() {
        const popover = (
            <Popover id="popover-basic">
                <Popover.Title as="h3">How To Use the Packing List</Popover.Title>
                <Popover.Content>
                Type whatever you need to pack below, press the add button, it will show up on your list!! When you have packed an item, simply select it and your packing progress will show up on the progress bar. Clear your packed items with the Clear button!
                </Popover.Content>
            </Popover>
        )
        const PackingList = (
            <div className="packing">
              <div>
                <Container fluid><Row className="title">
              <h1>Packing List</h1>
              <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                <Button className="howtouse" variant="light">?</Button>
              </OverlayTrigger></Row></Container></div>
                        <div className="InputElements">
                          <Container className="additem">
                        <Edit updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} /></Container>
                            <div className="taskProgressBar">
                            <h4>Percentage of Items Packed</h4>
                                <ProgressBar className="progressbar" now={this.state.progress} label={`${this.state.progress}%`} />
                                <div><Button className="removecomp" variant="danger" onClick={this.handleCompletedTasks}>Remove Completed</Button></div>
                            </div>
                        </div>

                        <div className="taskListElements">
                            <Container className="list">
                            <p>List of Items</p>
                            <Item tasks={this.state.taskList} handleTaskClick={this.handleTaskClick} /></Container>
                        </div>
            </div>
        );

        return (
            <div>
                {PackingList}
            </div>
        );
    }
}

export default packingList;
