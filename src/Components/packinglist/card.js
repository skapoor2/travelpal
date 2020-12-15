import React from "react";
import { Row, Card, ProgressBar, Button } from "react-bootstrap";
import AddTask from "./edit.js";
import ListItems from "./item.js";
import './card.css';

class ToDoItemList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskList: [],
            progress: 0 
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
        })} else {
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
                //task.variant = "light"
            }
            //task.variant = "success"
            return task;
        });
        const computeUpdatedProgress = this.computeProgress(completedTasks);

        this.setState({
            progress: computeUpdatedProgress,
            taskList: completedTasks,
        })
    }

    handleCompletedTasks = () => {
        const prevTaskList = this.state.taskList.slice();
        const completed = prevTaskList.filter(task => task.completed);
        const unCompletedTasks = prevTaskList.filter(task => !task.completed);
        if (completed.length !== 0){
        this.setState({
            taskList: unCompletedTasks,
            progress: 0
        })}
        else {
            alert("There are no completed items");
        }
        console.log(this.state);
    }

    render() {
        const jumbotronInstance = (
            <div>
                {/**<Row className="show-grid">
                    <Col xs={6} md={4}></Col>
        <Col xs={6} md={4}>
                    <Card style={{ width: '45rem' }}>*/}
                        <div className="InputElements">
                            <AddTask updatedTaskList={this.updateTaskList} handleCompletedTasks={this.handleCompletedTasks} />
                            <div className="taskProgressBar">
                            <h4>Percentage of Items Packed</h4>
                                <ProgressBar class="progressbar" active now={this.state.progress} label={`${this.state.progress}%`} />
                                <div class="button"><Button bsStyle="danger" onClick={this.handleCompletedTasks}>Remove Completed</Button></div>
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
                {jumbotronInstance}
            </div>
        );
    }
}

export default ToDoItemList;