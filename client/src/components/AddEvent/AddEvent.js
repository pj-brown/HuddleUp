import React from 'react';
import './AddEvent.css';

const AddEvent = ({ eventDate, eventStartTime, eventEndTime, eventType,handleInputChange, handleAddEvent, handleClose }) => {
    return (
        <div className="player-modal">
            {/* {console.log({ handleInputChange })} */}
            <div className="modal-content">
                <form>
                    <h3>Add a player</h3><hr />
                    <label for="event-date">Start Date</label>
                    <input
                        onChange={handleInputChange}
                        type="date" id="event-date"
                        name="EventDate"
                        placeholder="YYYY-MM-DD"
                        value={eventDate}
                    />

                    <label for="event-start-time">Start Time</label>
                    <input
                        onChange={handleInputChange}
                        type="time" id="event-start-time"
                        name="eventStartTime"
                        placeholder="08:00:00"
                        value={eventStartTime}
                    />

                    <label for="event-end-date">End Date</label>
                    <input
                        onChange={handleInputChange}
                        type="date" id="event-end-date"
                        name="eventEndDate"
                        placeholder="YYYY-MM-DD"
                        value={eventEndTime}
                    />

                    <label for="event-type">Event Type</label>
                    <input
                        onChange={handleInputChange}
                        type="text" id="event-type"
                        name="eventType"
                        placeholder="Practice"
                        value={eventType}
                    />             

                    <button onClick={handleAddEvent} className="add-event" title="Add Event">Add Player</button>

                </form>
                <div>

                    <button onClick={handleClose} className="modal-close" title="Close">Close</button>
                </div>
            </div>
        </div>
    )
}



export default AddEvent;