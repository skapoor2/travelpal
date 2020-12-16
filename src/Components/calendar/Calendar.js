import React, { Component } from 'react';
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
    return <FullCalendar 
              initialView="dayGridMonth" 
              plugins={[dayGridPlugin]}
              //editable={true}
              //eventDrop={this.handleEventDrop}
              //eventClick={this.handleEventClick}
              events={this.formatEvents()}
              

          />
  }
}





export default Calendar;