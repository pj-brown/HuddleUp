import React, { Component } from "react";
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import API from "../utils/API";
// import "import AddToCalendar from 'react-add-to-calendar;"

const localizer = momentLocalizer(moment);
const EventCalendar = withDragAndDrop(Calendar);
class Schedule extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(3, "hours").toDate(),
		title: "Some title",
      },
    ],
  };
  onComponentDidMount(){
   API.getUser();
   .then(res => {
     
   })
    
  }

  onEventResize = (data) => {
    const { start, end } = data;
    API.getEvents()
      .then(res => {
        this.setState((state) => {
          state.events[0].start = start;
          state.events[0].end = end;
          return { events: state.events };
        });
      })
  };

  onEventDrop = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div className="Schedule">
        <Navbar />
        <EventCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh", background: "white" }}
        />
      </div>
    );
  }
}
export default Schedule;
