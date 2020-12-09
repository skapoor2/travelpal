import React, { Component } from 'react';
import './home.css';
import { Card } from 'react-bootstrap';
import picture from '../img/yosemite.jpg'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>My Trips</h1>
        <h2>Upcoming Trips</h2>
        <div className="row">
          <Card classname="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Yosemite</Card.Title>
              <Card.Text>
                Dec. 21 - Dec. 25, 2020
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h2>Past Trips</h2>
        <div className="row">
          <Card classname="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Yosemite</Card.Title>
              <Card.Text>
                Dec. 21 - Dec. 25, 2020
              </Card.Text>
            </Card.Body>
          </Card>
          <Card classname="card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
              <Card.Title>Yosemite</Card.Title>
              <Card.Text>
                Dec. 21 - Dec. 25, 2020
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}
export default Home;