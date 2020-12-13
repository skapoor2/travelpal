import React, { Component } from 'react';
import './home.css';
import { Card, CardDeck } from 'react-bootstrap';
import picture from './img/yosemite.jpg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>My Trips</h1>
        <h2>Upcoming Trips</h2>
        <div className="row">
          <CardDeck>
            <Card classname="card">
              <Card.Img classname="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title classname="card-title">Yosemite</Card.Title>
                <Card.Text classname="card-text">
                  Dec. 21 - Dec. 25, 2020
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <h2>Past Trips</h2>
        <div className="row">
          <CardDeck>
            <Card classname="card">
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title classname="card-title">Yosemite</Card.Title>
                <Card.Text classname="card-text">
                  Dec. 21 - Dec. 25, 2020
                </Card.Text>
              </Card.Body>
            </Card>
            <Card classname="card">
              <Card.Img variant="top" src={picture} />
              <Card.Body>
                <Card.Title classname="card-title">Yosemite</Card.Title>
                <Card.Text classname="card-text">
                  Dec. 21 - Dec. 25, 2020
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    )
  }
}
export default Home;