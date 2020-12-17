import moment from 'moment';
import React, { Component } from 'react';
import './home.css';
import { Card, CardDeck, Container, Button, Form, Modal } from 'react-bootstrap';
import picture from './img/yosemite.jpg';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      title:"", 
      location:"", 
      startingDate:"",
      endingDate:"", 
      additionalNotes:"",
      showModal:false,
      showTripInfo:false
    }
  }

  componentDidMount(){
    const tripTitle = JSON.parse(localStorage.getItem("tripTitle"));
    const tripLocation = JSON.parse(localStorage.getItem("tripLocation"));
    const tripStart = JSON.parse(localStorage.getItem("tripStart"));
    const tripEnd = JSON.parse(localStorage.getItem("tripEnd"));
    const tripNotes = JSON.parse(localStorage.getItem("tripNotes"));
    if (localStorage.getItem("tripTitle")) {
      this.setState({
        title:tripTitle,
        location:tripLocation,
        startingDate:tripStart,
        endingDate:tripEnd, 
        additionalNotes:tripNotes
      })
    }
  }

  updateTitle(value){
    this.setState({title:value});
  }
  updateLocation(value){
    this.setState({location:value});
  }
  updateStartingDate(value){
    this.setState({startingDate:value});
  }
  updateEndingDate(value){
    this.setState({endingDate:value});
  }
  updateNotes(value){
    this.setState({additionalNotes:value});
  }

  saveTripInfo() {
    if (this.state.title === "" ){
      alert("Please provide a title for your event");
    }
    else if (this.state.location === ""){
      alert("Please provide a location for your event");
    }
    else if (this.state.startingDate === ""){
      alert("Please select a starting date");
    }
    else if (this.state.endingDate === ""){
      alert("Please select an ending date");
    }
    else {
      const startDate = moment(this.state.startingDate, "YYYY-MM-DD");
      const endDate = moment(this.state.endingDate, "YYYY-MM-DD");

      if (endDate.isBefore(startDate)){
        alert("End Date/Time cannot be before Start Date/Time. Please fix before adding entry.")
      }
      else {
        localStorage.setItem("tripTitle", JSON.stringify(this.state.title)); 
        localStorage.setItem("tripLocation", JSON.stringify(this.state.location)); 
        localStorage.setItem("tripStart", JSON.stringify(this.state.startingDate)); 
        localStorage.setItem("tripEnd", JSON.stringify(this.state.endingDate)); 
        localStorage.setItem("tripNotes", JSON.stringify(this.state.additionalNotes));
        this.setState({
          showModal:false,
          showTripInfo:true
        });
      }
    }
  }
  openModal(){
    this.setState({
      showModal:true,
      title:this.state.title,
      location:this.state.location,
      startingDate:this.state.startingDate,
      endingDate:this.state.endingDate, 
      additionalNotes:this.state.additionalNotes
    });
  }
  closeModal() {
    this.setState({showModal:false});
  }
  clearData(){
    this.setState({
      title:"", 
      location:"", 
      startingDate:"",
      endingDate:"", 
      additionalNotes:"",
      showModal:false,
      showTripInfo:false
    });
    localStorage.setItem("tripTitle", JSON.stringify("")); 
    localStorage.setItem("tripLocation", JSON.stringify("")); 
    localStorage.setItem("tripStart", JSON.stringify("")); 
    localStorage.setItem("tripEnd", JSON.stringify("")); 
    localStorage.setItem("tripNotes", JSON.stringify(""));
  }

  render() {
    if (this.state.showTripInfo===false){
      return (
        <div className="home">
          <h1>My Trip</h1>
          <Container>
            <h4>There are no trips planned right now</h4>
            <Button onClick= { () => this.openModal()}>Edit</Button>
          </Container>
          <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Edit Trip Information</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                      <Form.Control 
                        value={this.state.title}
                        onChange = {item => this.updateTitle(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                      <Form.Control 
                        value={this.state.location}
                        onChange = {item => this.updateLocation(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Starting Date</Form.Label>
                      <Form.Control 
                        type="date"
                        value={this.state.startingDate}
                        onChange = {item => this.updateStartingDate(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Ending Date</Form.Label>
                      <Form.Control 
                        type="date"
                        value={this.state.endingDate}
                        onChange = {item => this.updateEndingDate(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Additional Notes</Form.Label>
                      <Form.Control 
                        as="textarea"
                        value={this.state.additionalNotes}
                        onChange = {item => this.updateNotes(item.target.value)}
                      ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal.bind(this)}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={this.saveTripInfo.bind(this)}>
                        Save Changes
                      </Button>
              </Modal.Footer>
            </Modal>
          <p>upload image file</p>
          <Container className="cards">
            <CardDeck>
              <Card className="card">
                <Card.Img className="card-img" variant="top" src={picture} />
                <Card.Body>
                  <Card.Title className="card-title">Packing List</Card.Title>
                </Card.Body>
              </Card>
              <Card className="card">
                <Card.Img className="card-img" variant="top" src={picture} />
                <Card.Body>
                  <Card.Title className="card-title">Budget Tracker</Card.Title>
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
                  <Card.Title className="card-title">Calendar</Card.Title>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
      )
    } else {
      return (
        <div className="home">
          <h1>My Trip</h1>
          <Container>
            <h3>Trip Title:</h3>
            <p>{this.state.title}</p>
            <h4>Location:</h4>
            <p>{this.state.title}</p>
            <h4>Starting Date:</h4>
            <p>{this.state.startingDate}</p>
            <h4>Ending Date:</h4>
            <p>{this.state.endingDate}</p>
            <h4>Additional Notes:</h4>
            <p>{this.state.additionalNotes}</p>
            <Button onClick= { () => this.openModal()}>Edit</Button>
            <Button onClick= { () => this.clearData()}>Clear</Button>
          </Container>
          <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Edit Trip Information</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                      <Form.Control 
                        value={this.state.title}
                        onChange = {item => this.updateTitle(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Location</Form.Label>
                      <Form.Control 
                        value={this.state.location}
                        onChange = {item => this.updateLocation(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Starting Date</Form.Label>
                      <Form.Control 
                        type="date"
                        value={this.state.startingDate}
                        onChange = {item => this.updateStartingDate(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Ending Date</Form.Label>
                      <Form.Control 
                        type="date"
                        value={this.state.endingDate}
                        onChange = {item => this.updateEndingDate(item.target.value)}
                        required
                      ></Form.Control>
                  </Form.Group>
  
                  <Form.Group>
                    <Form.Label>Additional Notes</Form.Label>
                      <Form.Control 
                        as="textarea"
                        value={this.state.additionalNotes}
                        onChange = {item => this.updateNotes(item.target.value)}
                      ></Form.Control>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.closeModal.bind(this)}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={this.saveTripInfo.bind(this)}>
                        Save Changes
                      </Button>
              </Modal.Footer>
            </Modal>
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
}
export default Home;