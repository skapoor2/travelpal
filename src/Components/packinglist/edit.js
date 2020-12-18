import { Button, Form, Col } from "react-bootstrap";
import React from 'react';
import './packingList.css'; 

class Edit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            taskValue: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.current(this.state.taskValue);
        this.setState({
            taskValue: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            taskValue: event.target.value
        })
    }


    render() {
        const formInstance = (
            <Form onSubmit={this.handleSubmit}>
                <Form.Row className="inputstuff">
                <Col lg={10}>
                    <Form.Group>
                    <Form.Control type="text" placeholder="Add Task" value={this.state.taskValue} onChange={this.handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={2}><Button variant = "dark" type="submit">Add Item</Button>
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

export default Edit;