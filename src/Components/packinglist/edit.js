import { Button, Form, Col } from "react-bootstrap";
import React from 'react';

class AddTask extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            taskValue: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.updatedTaskList(this.state.taskValue);

        this.setState({
            taskValue: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            taskValue: event.target.value
        })
    }

    /*removeCompletedTasks = () => {
        this.props.handleCompletedTasks();
    }*/

    render() {
        const formInstance = (
            <Form inline onSubmit={this.handleSubmit}>
                
                <Form.Row>
                <Col lg="auto">
                    <Form.Group>
                    <Form.Control type="text" placeholder="Add Task" value={this.state.taskValue} onChange={this.handleChange} />
                    </Form.Group>
                </Col>
                <Col lg="auto"><Button variant = "primary" type="submit"> add item</Button>
                </Col>
            </Form.Row>

                

            </Form>
        );

        return (
            <div className="taskInputs">
                {formInstance}
            </div>
        );
    }

}

export default AddTask;