import moment from 'moment';
import React, { Component } from 'react';
import './home.css';
import { Card, CardDeck, Container, Button, Form, Modal } from 'react-bootstrap';
import picture from './img/yosemite.jpg';
//import { CalendarCheckFill, CalendarCheck } from 'react-bootstrap-icons';

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
        additionalNotes:tripNotes,
        showTripInfo:true
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
      showTripInfo:false,
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
    localStorage.clear();
  }

  render() {
    if (this.state.showTripInfo===false){
      return (
        <div className="home">
          <h1>My Trip</h1>
          <Container>
            <h4>There is no trip planned right now</h4>
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
    } else {
      return (
        <div className="home">
          <Container>
            <h1>{this.state.title}</h1>
            <p><strong>Location:</strong> {this.state.location}</p>
            <p><strong>Starting Date:</strong> {this.state.startingDate}</p>
            <p><strong>Ending Date:</strong> {this.state.endingDate}</p>
            <p><strong>Additional Notes:</strong> {this.state.additionalNotes}</p>
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