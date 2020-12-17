import moment from 'moment';
import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Table, Button, Form, Modal, Popover, OverlayTrigger } from 'react-bootstrap';
import './itinerary.css';
import * as Icon from 'react-bootstrap-icons';


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
      description:"",
      showModal:false,
      modalDateValue:"",
      modalKeyId:""
    };
  }

  componentDidMount(){
    const itineraryData = JSON.parse(localStorage.getItem("all_itinerary_data"));
    //console.log(itineraryData);
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
      //console.log(startDate);

      if (endDate.isBefore(startDate)){
        alert("End Date/Time cannot be before Start Date/Time. Please fix before adding entry.")
      }

      else{
        const entry = {
          entryId: Math.random(),
          entryTitle: this.state.title,
          entryDescription: this.state.description,
          entryStartDay: startDate.format("dddd, MMM D, YYYY"),
          entryStartTime: startDate.format('h:mm a'),
          entryEndDay: endDate.format("dddd, MMM D, YYYY"),
          entryEndTime: endDate.format('h:mm a'),
          entryStart:startDate,
          entryEnd:endDate
        };
  
        const allItineraryData = [...this.state.allItineraryData];
  
        const dateKey = startDate.format("dddd, MMM D, YYYY");
        
        
  
        //if empty/first item entered, make Dates object and add to allItineraryData
        if (allItineraryData.length === 0){
          //console.log("itin was empty");
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
              //console.log("itin was not empty");
              allItineraryData[i].allEntries.push(entry);
              //allItineraryData[i].allEntries.sort((a,b) => moment(a.entryStartTime).diff(moment(b.entryStartTime))).reverse();
              isAdded = true;
              break;
            }
          }
          //If dateKey doesn't exist as a Dates.date yet, then it will create a new Dates object and add that to allItineraryData
          if (!isAdded){
            //console.log("Not in data");
            const Dates = {
              date:dateKey,
              allEntries:[entry]
            };
            allItineraryData.push(Dates);
          }
          isAdded=false;
        
        }
  
        //sorts the entire allItineraryData so that the dates show up chronologically 
        allItineraryData.sort((a,b)=>moment(a.date).diff(moment(b.date)));
        for (var j = 0; j < allItineraryData.length; j++) {
          allItineraryData[j].allEntries.sort((a,b) => moment(a.entryStart).diff(moment(b.entryStart)));
        };
  
        localStorage.setItem("all_itinerary_data", JSON.stringify(allItineraryData));
  
        
        
        this.setState({
          allItineraryData:allItineraryData,
          title:"",
          startingDate:"",
          endingDate:"",
          startingTime:"",
          endingTime:"",
          description:"",
          modalKeyId:"",
          modalDateValue:""
        });
  

      }
      
      
    }

    
    
  }

  deleteEntry(dateValue, keyId){
    const allItineraryData = [...this.state.allItineraryData];

    const unchangedItineraryData = allItineraryData.filter(item => item.date !== dateValue);
    //console.log("unchanged");
    //console.log(unchangedItineraryData);

    //console.log("allItineraryData");
    //console.log(allItineraryData);

    const dateObjectToChange = allItineraryData.find((value) => value.date === dateValue);
    //console.log("thing to change");
    //console.log(dateObjectToChange);

    const newAllEntries = dateObjectToChange.allEntries.filter(item => item.entryId !== keyId);
    //console.log("newAllentries");
    //console.log(newAllEntries);

    if (newAllEntries.length !== 0){
      dateObjectToChange.allEntries = newAllEntries;
      //console.log("New object entries");
      //console.log(dateObjectToChange.allEntries);

      unchangedItineraryData.push(dateObjectToChange);
      //console.log("ChangedItineraryData");
      //console.log(unchangedItineraryData);
    }

    unchangedItineraryData.sort((a,b)=>moment(a.date).diff(moment(b.date)));

    //localStorage.removeItem("all_itinerary_data");

    localStorage.setItem("all_itinerary_data", JSON.stringify(unchangedItineraryData));

    this.setState({
      allItineraryData:unchangedItineraryData
    });
    
    //console.log("allItineraryData");
    //console.log(allItineraryData);

  }

  handleClose(){
    this.setState({
      showModal:false,
      title:"",
      startingDate:"",
      endingDate:"",
      startingTime:"",
      endingTime:"",
      description:"",
      modalDateValue:"",
      modalKeyId:""
    });
  }

  handleSave(){

    //Now I know it isn't good practice to reuse code like I did in this handleSave() but I needed to change some parts of the delete entry and add entry in order for the localStorage 
    //and this.state.allItinerarydata to be in sync or else calling both functions (which i wanted to do) would overlap the localStorage and this.state.allItineraryData

    //console.log("ModalDateValue:")
    //console.log(this.state.modalDateValue);
    //console.log("ModalKeyId:");
    //console.log(this.state.modalKeyId);
    //this.deleteEntry(this.state.modalDateValue, this.state.modalKeyId);

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
      //console.log(startDate);

      if (endDate.isBefore(startDate)){
        alert("End Date/Time cannot be before Start Date/Time. Please fix before adding entry.");
        this.openModal(this.state.modalDateValue, this.state.modalKeyId);
      }
      else{
            // --------------------------------Delete Section-----------------------------------------------------------------------
          const thisAllItineraryData = [...this.state.allItineraryData];

          const unchangedItineraryData = thisAllItineraryData.filter(item => item.date !== this.state.modalDateValue);
          //console.log("unchanged");
          //console.log(unchangedItineraryData);



          //console.log("allItineraryData");
          //console.log(thisAllItineraryData);

          const dateObjectToChange = thisAllItineraryData.find((value) => value.date === this.state.modalDateValue);
          //console.log("thing to change");
          //console.log(dateObjectToChange);

          const newAllEntries = dateObjectToChange.allEntries.filter(item => item.entryId !== this.state.modalKeyId);
          //console.log("newAllentries");
          //console.log(newAllEntries);

          if (newAllEntries.length !== 0){
            dateObjectToChange.allEntries = newAllEntries;
            //console.log("New object entries");
            //console.log(dateObjectToChange.allEntries);

            unchangedItineraryData.push(dateObjectToChange);
            //console.log("ChangedItineraryData");
            //console.log(unchangedItineraryData);

            
          }
          else{
            //console.log("THIS IS AN ISSUE");
            
            //console.log(unchangedItineraryData);

          }
          unchangedItineraryData.sort((a,b)=>moment(a.date).diff(moment(b.date)));
          //console.log("after sort");
          //console.log(unchangedItineraryData);

          localStorage.setItem("all_itinerary_data", JSON.stringify(unchangedItineraryData));



          //console.log("allItineraryData");
          //console.log(thisAllItineraryData);

          this.setState({
            allItineraryData:unchangedItineraryData
          });

          //console.log("this.state.allItineraryData");
          //console.log(this.state.allItineraryData);


          // -------------------------Add section---------------------------


          
              const entry = {
                entryId: Math.random(),
                entryTitle: this.state.title,
                entryDescription: this.state.description,
                entryStartDay: startDate.format("dddd, MMM D, YYYY"),
                entryStartTime: startDate.format('h:mm a'),
                entryEndDay: endDate.format("dddd, MMM D, YYYY"),
                entryEndTime: endDate.format('h:mm a'),
                entryStart: startDate,
                entryEnd: endDate
              };

              const dateKey = startDate.format("dddd, MMM D, YYYY");
              
              

              //if empty/first item entered, make Dates object and add to allItineraryData
              
              
                //else iterate through allItineraryData to check if heading date already exists
                var isAdded= false;
                
                for (var i = 0; i < unchangedItineraryData.length; i++) {
                  // if Dates.date matches the dateKey, push entry into its allEntries array
                  if (unchangedItineraryData[i].date === dateKey){
                    //console.log("itin was not empty");
                    unchangedItineraryData[i].allEntries.push(entry);
                    //unchangedItineraryData[i].allEntries.sort((a,b) => moment(a.entryStartTime).diff(moment(b.entryStartTime))).reverse();
                    isAdded = true;
                    break;
                  }
                }
                //If dateKey doesn't exist as a Dates.date yet, then it will create a new Dates object and add that to allItineraryData
                if (!isAdded){
                  //console.log("Not in data");
                  const Dates = {
                    date:dateKey,
                    allEntries:[entry]
                  };
                  unchangedItineraryData.push(Dates);
                }
                isAdded=false;
              
              

              //sorts the entire allItineraryData so that the dates show up chronologically 
              unchangedItineraryData.sort((a,b)=>moment(a.date).diff(moment(b.date)));

              for (var j = 0; j < unchangedItineraryData.length; j++) {
                unchangedItineraryData[j].allEntries.sort((a,b) => moment(a.entryStart).diff(moment(b.entryStart)));
              };

              localStorage.setItem("all_itinerary_data", JSON.stringify(unchangedItineraryData));

              
              
              this.setState({
                allItineraryData:unchangedItineraryData,
              });

        } 

    

    }


    //this.addEntry();


    this.handleClose();
    



    }


  



  openModal(dateValue, keyId){
    
    const allItineraryData = [...this.state.allItineraryData];

    const dateObjectToChange = allItineraryData.find((value) => value.date === dateValue);

    const dateEntryToChange = dateObjectToChange.allEntries.find((entry) => entry.entryId === keyId);

    this.setState({
        showModal:true,
        title:dateEntryToChange.entryTitle,
        startingDate:moment(dateEntryToChange.entryStartDay, "dddd, MMM D, YYYY").format("YYYY-MM-DD"),
        endingDate:moment(dateEntryToChange.entryEndDay, "dddd, MMM D, YYYY").format("YYYY-MM-DD"),
        startingTime:moment(dateEntryToChange.entryStartTime, 'h:mm a').format("HH:mm"),
        endingTime:moment(dateEntryToChange.entryEndTime, 'h:mm a').format("HH:mm"),
        description:dateEntryToChange.entryDescription,
        modalKeyId:keyId,
        modalDateValue:dateValue
    });

   
  }


  render() {
    const popover = (
      <Popover id="popover-basic">
          <Popover.Title as="h3">How To Use the Itinerary</Popover.Title>
          <Popover.Content>
          Using the form on the right, add an itinerary event by giving it a title, selecting a start date and time and an end date and time, and giving it an optional description if necessary. Then click on the "Add Entry" button to populate an itinerary list on the left. Once you add an event, you will see all of them sorted by date and time. On the right of each entry, you can also click on the "Edit" button to edit that event entry, or you can delete it entirely by clicking on the "Delete" button. 
          </Popover.Content>
      </Popover>
    )
  
    if(this.state.allItineraryData.length === 0){
      return (
      <div className="itinerary">
        <div>
          <Container fluid>
            <Row className="title">
            <h1>Itinerary</h1>
              <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                <Button className="how-to" variant="light">?</Button>
              </OverlayTrigger>
            </Row>
          </Container>
        </div>
        
       
        <Container>
          <Row className="pageContent">
            <Col md={8}>
              <h4>Itinerary is empty.<br/>Please add an entry using the form on the right.</h4>
            </Col>

            <Col md={4}>
              <Form className="itineraryForm">
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
                <Button className = "addEntryButton" onClick={() => this.addEntry()}>Add Entry</Button>
              </Form>
              
            </Col>

          </Row>
        </Container>





      </div>
      )
    }
    else{
      return (
        <div className="itinerary">
          <div>
            <Container fluid>
              <Row className="title">
              <h1>Itinerary</h1>
                <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                  <Button className="how-to" variant="light">?</Button>
                </OverlayTrigger>
              </Row>
            </Container>
          </div>
         
          <Container >
            <Row className="pageContent">
              <Col md={8}>
                <ListGroup className="dateEntry">
                  {this.state.allItineraryData.map((item) => {return(
                    <ListGroup.Item key={item.date}><h5>{item.date}</h5>
                      <Table>
                        <thead>
                          <tr>
                            <th className="thIndex"></th>
                            <th className="thTitle">Title</th>
                            <th className="thStart">Start Time</th>
                            <th className="thEnd">End Time</th>
                            <th className="thButtons"></th>
                          </tr>
                        </thead>
                        
                          {item.allEntries.map((entry, index) => {return(
                            <tbody key={entry.entryId+8}>
                              <tr key ={entry.entryId}>
                                <td key={entry.entryId+1}>{index+1}</td>
                                <td key={entry.entryId+2}>{entry.entryTitle}</td>
                                <td key={entry.entryId+3}>{entry.entryStartTime}</td>
                                <td key={entry.entryId+4}>{entry.entryEndTime}</td>
                                <td key={entry.entryId+5}>
                                  <Icon.PencilFill color="DodgerBlue" onClick = { () => this.openModal(item.date, entry.entryId)}/>
                                  <Icon.TrashFill color="red" onClick = { ()=> this.deleteEntry(item.date, entry.entryId)}/>
                                </td>
                                
                              </tr>
                              <tr key={entry.entryId+6}>
                                <td ></td>
                                <td colSpan="4" key={entry.entryId+7}><strong>Description:</strong> <br/>{entry.entryDescription}</td>
                              </tr>
                            
                            </tbody>
                          )})}
                        
                      </Table>
  
                    </ListGroup.Item>
                  )})}
  
                  <Modal show={this.state.showModal} onHide={this.handleClose.bind(this)} centered backdrop="static">
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Entry</Modal.Title>
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
  
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={this.handleSave.bind(this)}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
  
                </ListGroup>
              </Col>
  
              <Col md={4}>
                <Form className="itineraryForm">
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
                  <Button className ="addEntryButton" onClick={() => this.addEntry()}>Add Entry</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      )

    }
    
  }
}
export default Itinerary;