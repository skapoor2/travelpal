import React, { Component} from 'react';
import { Container, Row, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import './calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


class Calendar extends Component {
  constructor(props){
    super(props);
    const allItineraryData = JSON.parse(localStorage.getItem("all_itinerary_data"));
    this.state={
      allItineraryEvents:allItineraryData
    };
    console.log(this.state.allItineraryEvents);
  }

  formatEvents(){
    const allEvents = [];

    for (var i = 0; i < this.state.allItineraryEvents.length; i++){
      for (var j = 0; j < this.state.allItineraryEvents[i].allEntries.length; j++){
        var startDate = new Date(this.state.allItineraryEvents[i].allEntries[j].entryStart);
        var endDate = new Date(this.state.allItineraryEvents[i].allEntries[j].entryEnd);
        var event = {
          title:this.state.allItineraryEvents[i].allEntries[j].entryTitle,
          start:startDate,
          end:endDate
        };
        allEvents.push(event);
      }
    }
  
    return (allEvents)
  }


  render() {
    
    const popover = (
      <Popover id="popover-basic">
          <Popover.Title as="h3">How To Use the Calendar</Popover.Title>
          <Popover.Content>
          Currently, the Calendar only offers a calendar-view of all itinerary events. You can navigate to different months using the left and right arrow buttons on the top right. You can click on the "Today" button to take you back to today's date. If you want to add more events to the calender, you can do so by adding events in the Itinerary section of Travel Pal. 
          </Popover.Content>
      </Popover>
    )
    
    return (
      <div>
        <div>
          <Container fluid>
            <Row className="title">
            <h1>Calendar</h1>
              <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover}>
                <Button className="how-to" variant="light">?</Button>
              </OverlayTrigger>
            </Row>
          </Container>
        </div>


        <FullCalendar 
            initialView="dayGridMonth" 
            plugins={[dayGridPlugin]}
            events={this.formatEvents()}
        />
      </div>

    )
    
    
  }
}





export default Calendar;