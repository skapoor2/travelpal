
import React from "react";
import { Popover, ProgressBar, Button, OverlayTrigger, Container, Row, Col } from "react-bootstrap";
import AddTask from "./edit.js";
import ListItems from "./item.js";
import './packingList.css';

class ToDoItemList extends React.Component {

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
        //console.log(this.state);
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
              <div className="title">
                <Container fluid><Row>
              <h1>Packing list content</h1>
              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button className="howtouse" variant="light">How to Use</Button>
              </OverlayTrigger></Row></Container></div>
                        <div className="InputElements">
                            <AddTask updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} />
                            <div className="taskProgressBar">
                            <h4>Percentage of Items Packed</h4>
                                <ProgressBar className="progressbar" now={this.state.progress} label={`${this.state.progress}%`} />
                                <div><Button className="removecomp" variant="danger" onClick={this.handleCompletedTasks}>Remove Completed</Button></div>
                            </div>
                        </div>

                        <div className="taskListElements">
                            <p>List</p>
                            <ListItems tasks={this.state.taskList} handleTaskClick={this.handleTaskClick} />
                        </div>

                    {/**</Col>
                    <Col xsHidden md={4}></Col>
                    </Row></Card>*/}
            </div>
        );

        return (
            <div>
                {PackingList}
            </div>
        );
    }
}

export default ToDoItemList;
