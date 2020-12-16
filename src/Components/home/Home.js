import React, { Component } from 'react';
import './home.css';
import { Card, CardDeck, Container } from 'react-bootstrap';
import picture from './img/yosemite.jpg';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>My Trip</h1>
        <p>input form for trip information</p>
        <p>upload image file</p>
        <Container className="cards">
          <CardDeck>
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Calendar</Card.Title>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Packing List</Card.Title>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Itinerary</Card.Title>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img className="card-img" variant="top" src={picture} />
              <Card.Body>
                <Card.Title className="card-title">Budget Tracker</Card.Title>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    )
  }
}
export default Home;