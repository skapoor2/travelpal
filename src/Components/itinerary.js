import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Table, Button, Form } from 'react-bootstrap';
import './Itinerary.css';

class Itinerary extends Component {
  render() {
    return (
      <div className="itinerary">
        <h1>Itinerary</h1>

        <Container>
          <Row>

            <Col md={8}>
              <ListGroup>
                <ListGroup.Item>Sunday 1/1/20
                  <Table>
                    <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Edit and Delete Buttons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Check into hotel</td>
                        <td>10:00 A.M.</td>
                        <td>11:00 A.M.</td>
                        <td>
                          <Button>Edit</Button> {' '}
                          <Button>Delete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>2.</td>
                        <td>Eat lunch</td>
                        <td>12:00 P.M.</td>
                        <td>1:00 P.M.</td>
                        <td>
                          <Button>Edit</Button> {' '}
                          <Button>Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item>Monday 1/2/20
                <Table>
                <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Edit and Delete Buttons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Check into hotel</td>
                        <td>10:00 A.M.</td>
                        <td>11:00 A.M.</td>
                        <td>
                          <Button>Edit</Button> {' '}
                          <Button>Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item>Tuesday 1/3/20
                <Table>
                <thead>
                      <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Edit and Delete Buttons</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Check into hotel</td>
                        <td>10:00 A.M.</td>
                        <td>11:00 A.M.</td>
                        <td>
                          <Button>Edit</Button> {' '}
                          <Button>Delete</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>

                
              </ListGroup>
            </Col>

            <Col md={4}>
              <Form>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Starting Date</Form.Label>
                  <Form.Control type="date"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ending Date</Form.Label>
                  <Form.Control type="date"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Starting Time</Form.Label>
                  <Form.Control type="time"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ending Time</Form.Label>
                  <Form.Control type="time"></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea"></Form.Control>
                </Form.Group>
              </Form>
              <Button>Add Entry</Button>
            </Col>

          </Row>
        </Container>





      </div>
    )
  }
}
export default Itinerary;