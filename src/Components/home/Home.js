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
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Yosemite</Card.Title>
                <Card.Text className="card-text">
                  Dec. 21 - Dec. 25, 2020
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
        <h2>Past Trips</h2>
        <div className="row">
          <CardDeck>
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Yosemite</Card.Title>
                <Card.Text className="card-text">
                  Dec. 21 - Dec. 25, 2020
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Yosemite</Card.Title>
                <Card.Text className="card-text">
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