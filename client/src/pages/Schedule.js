import React, { Component } from "react";
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Modal } from '@material-ui/core';

import API from "../utils/API";
import AddEvent from "../components/AddEvent/AddEvent"
// import "import AddToCalendar from 'react-add-to-calendar;"

const localizer = momentLocalizer(moment);
// const EventCalendar = withDragAndDrop(Calendar);
class Schedule extends Component {
  state = {
    rosterId: 0,
    events: [],
    open: false
  };

  componentDidMount = () => {
    var uid = JSON.parse(localStorage.getItem("currentUser")).uid;
    API.getRoster(uid).then(({data}) => {
      this.setState({...this.state, rosterId: data[0].id})
      this.getCurrentEvents();
    })
  }

  getCurrentEvents = () => {
    API.getEvents(this.state.rosterId).then(({data}) => {
      var eventArr = [];
      data.map(event => {
        var startDT = moment(event.eventDate + ' ' + event.eventStartTime, 'YYYY-MM-DD HH:mm')
        var endDT = moment(event.eventDate + ' ' + event.eventEndTime, 'YYYY-MM-DD HH:mm')
        eventArr.push({
          start: startDT,
          end: endDT,
          title:event.eventType})
      })
      this.setState({events: eventArr});
    })
  }

  // onEventResize = (data) => {
  //   const { start, end } = data;
  //   API.getEvents()
  //     .then(res => {
  //       this.setState((state) => {
  //         state.events[0].start = start;
  //         state.events[0].end = end;
  //         return { events: state.events };
  //       });
  //     })
  // };

  // onEventDrop = (data) => {
  //   console.log(data);
  // };
   handleInputChange(event) {
		const { name, value } = event.target;
		this.setState({ ...this.state, [name]: value })
  };
  
  handleAddEvent(event) {
		event.preventDefault();
    
		API.saveEvent({
			eventDate: this.state.eventDate,
			eventStartTime: this.state.eventStartTime,
			eventEndTime: this.state.eventEndTime,
			eventType: this.state.eventType,
			RosterId: 1
		})
			.then(res => this.getCurrentEvents())
			.catch(err => console.log(err));
	};

   handleOpen = () => {
		this.setState({...this.state, open:true});
	};

	 handleClose = () => {
		this.setState({...this.state, open:false});
	};
  body = (
		<div className="container">
			<AddEvent
				handleInputChange={this.handleInputChange}
				handleAddEvent={this.handleAddEvent}
				eventDate={this.state.eventDate}
				eventStartTime={this.state.eventStartTime}
				eventEndTime={this.state.eventEndTime}
				eventType={this.state.eventType}
				handleClose={this.handleClose}
			/>
		</div>
	);

  render() {
    return (
      <div className="Schedule">
        <Navbar />
        <div className="container">
				<div>
					<button type="button" onClick={this.handleOpen}>Create Player</button>
					<Modal
						open={this.state.open}
						onClose={this.handleClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
					>
						{this.body}
					</Modal>
				</div>
			</div>
        <Calendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          // onEventDrop={this.onEventDrop}
          // onEventResize={this.onEventResize}
          resizable
          style={{ height: "100vh", background: "white" }}
        />
      </div>
    );
  }
}
export default Schedule;
