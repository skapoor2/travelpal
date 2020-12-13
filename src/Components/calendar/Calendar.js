import React, { Component } from 'react';
import './calendar.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

class Calendar extends Component {





  render() {
    return <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[dayGridPlugin, interactionPlugin]}
              editable={true}
              eventDrop={this.handleEventDrop}
              eventClick={this.handleEventClick}
              //events={this.formatEvents()}
          />
  }
}





export default Calendar;