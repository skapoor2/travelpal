import moment from 'moment';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Table, Button, Form, Modal } from 'react-bootstrap';
import './itinerary.css';


class Itinerary extends Component {

  constructor(props){
    super(props);
    this.state={
      allItineraryData:[],
      title:"",
      startingDate:"",
      endingDate:"",
      startingTime:"",
      endingTime:"",
      description:""
    };
  }

  componentDidMount(){
    const itineraryData = JSON.parse(localStorage.getItem("all_itinerary_data"));
    console.log(itineraryData);
    if (localStorage.getItem("all_itinerary_data")) {
      this.setState({
        allItineraryData:itineraryData
      })
    }

  }

  updateTitle(value){
    this.setState({title:value});
  }

  updateStartingDate(value){
    this.setState({startingDate:value});
  }

  updateEndingDate(value){
    this.setState({endingDate:value});
  }
  
  updateStartingTime(value){
    this.setState({startingTime:value});
  }

  updateEndingTime(value){
    this.setState({endingTime:value});
  }

  updateDescription(value){
    this.setState({description:value});
  }

  addEntry() {

    if (this.state.title === "" ){
      alert("Please provide a title for your event");
    }
    else if (this.state.startingDate === ""){
      alert("Please select a starting date");
    }
    else if (this.state.endingDate === ""){
      alert("Please select an ending date");
    }
    else if (this.state.startingTime === ""){
      alert("Please select a starting time");
    }
    else if (this.state.endingTime === ""){
      alert("Please select an ending time");
    }
    else{
      const startDate = moment(this.state.startingDate+ " " +this.state.startingTime, "YYYY-MM-DD hh:mm");
      const endDate = moment(this.state.endingDate+ " "+this.state.endingTime, "YYYY-MM-DD hh:mm");
      console.log(startDate);

      const entry = {
        entryId: Math.random(),
        entryTitle: this.state.title,
        entryDescription: this.state.description,
        entryStartDay: startDate.format("dddd, MMM D, YYYY"),
        entryStartTime: startDate.format('h:mm a'),
        entryEndDay: endDate.format("dddd, MMM D, YYYY"),
        entryEndTime: endDate.format('h:mm a')
      };

      const allItineraryData = [...this.state.allItineraryData];

      const dateKey = startDate.format("dddd, MMM D, YYYY");
      
      

      //if empty/first item entered, make Dates object and add to allItineraryData
      if (allItineraryData.length === 0){
        console.log("itin was empty");
        const Dates = {
          date:dateKey,
          allEntries:[entry]
        };
        allItineraryData.push(Dates);
      }
      else{
        //else iterate through allItineraryData to check if heading date already exists
        var isAdded= false;
        
        for (var i = 0; i < allItineraryData.length; i++) {
          // if Dates.date matches the dateKey, push entry into its allEntries array
          if (allItineraryData[i].date === dateKey){
            console.log("itin was not empty");
            allItineraryData[i].allEntries.push(entry);
            allItineraryData[i].allEntries.sort((a,b) => moment(a.entryStartTime).diff(moment(b.entryStartTime))).reverse();
            isAdded = true;
            break;
          }
        }
        //If dateKey doesn't exist as a Dates.date yet, then it will create a new Dates object and add that to allItineraryData
        if (!isAdded){
          console.log("Not in data");
          const Dates = {
            date:dateKey,
            allEntries:[entry]
          };
          allItineraryData.push(Dates);
        }
      
      }

      //sorts the entire allItineraryData so that the dates show up chronologically 
      allItineraryData.sort((a,b)=>moment(a.date).diff(moment(b.date)));

      localStorage.setItem("all_itinerary_data", JSON.stringify(allItineraryData));
      
      this.setState({
        allItineraryData,
        title:"",
        startingDate:"",
        endingDate:"",
        startingTime:"",
        endingTime:"",
        description:""
      });

      
    }

    
    
  }

  deleteEntry(dateValue, keyId){
    const allItineraryData = [...this.state.allItineraryData];

    const unchangedItineraryData = allItineraryData.filter(item => item.date !== dateValue);
    console.log("unchanged");
    console.log(unchangedItineraryData);

    console.log("allItineraryData");
    console.log(allItineraryData);

    const dateObjectToChange = allItineraryData.find((value) => value.date === dateValue);
    console.log("thing to change");
    console.log(dateObjectToChange);

    const newAllEntries = dateObjectToChange.allEntries.filter(item => item.entryId !== keyId);
    console.log("newAllentries");
    console.log(newAllEntries);

    if (newAllEntries.length !== 0){
      dateObjectToChange.allEntries = newAllEntries;
      console.log("New object entries");
      console.log(dateObjectToChange.allEntries);

      unchangedItineraryData.push(dateObjectToChange);
      console.log("ChangedItineraryData");
      console.log(unchangedItineraryData);

    }

    unchangedItineraryData.sort((a,b)=>moment(a.date).diff(moment(b.date)));

    localStorage.removeItem("all_itinerary_data");

    localStorage.setItem("all_itinerary_data", JSON.stringify(unchangedItineraryData));

    this.setState({
      allItineraryData:unchangedItineraryData
    });
    

  }



   openModal(dateValue, keyId){
    const allItineraryData = [...this.state.allItineraryData];

    const dateObjectToChange = allItineraryData.find((value) => value.date === dateValue);

    const dateEntryToChange = dateObjectToChange.allEntries.find((entry) => entry.entryId === keyId);



    var show = true;

    const handleClose = () => show = false;

    return (
      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Hello
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }


  render() {
    return (
      <div className="itinerary">
        <h1>Itinerary</h1>
       
        <Container>
          <Row>
            <Col md={8}>
              <ListGroup>
                {this.state.allItineraryData.map((item) => {return(
                  <ListGroup.Item key={item.date}>{item.date}
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
                        {item.allEntries.map((entry, index) => {return(
                          <>
                            <tr key ={entry.entryId}>
                              <td>{index+1}</td>
                              <td >{entry.entryTitle}</td>
                              <td >{entry.entryStartTime}</td>
                              <td >{entry.entryEndTime}</td>
                              <td >
                                <Button onClick = { () => this.openModal(item.date, entry.entryId)}>Edit</Button> {' '}
                                <Button onClick = { ()=> this.deleteEntry(item.date, entry.entryId)}>Delete</Button>
                              </td>
                              
                            </tr>
                            <tr>
                              <td ></td>
                              <td colSpan="4">{entry.entryDescription}</td>
                            </tr>
                          
                          </>
                        )})}
                      </tbody>
                    </Table>

                  </ListGroup.Item>
                )})}
              </ListGroup>
            </Col>

            <Col md={4}>
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
                  <Form.Label>Starting Time</Form.Label>
                  <Form.Control 
                    type="time"
                    value={this.state.startingTime}
                    onChange = {item => this.updateStartingTime(item.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Ending Time</Form.Label>
                  <Form.Control 
                    type="time"
                    value={this.state.endingTime}
                    onChange = {item => this.updateEndingTime(item.target.value)}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control 
                    as="textarea"
                    value={this.state.description}
                    onChange = {item => this.updateDescription(item.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Form>
              <Button onClick={() => this.addEntry()}>Add Entry</Button>
              <Button onClick={()=>console.log(this.state.allItineraryData)}>Show Data</Button>
            </Col>

          </Row>
        </Container>





      </div>
    )
  }
}
export default Itinerary;