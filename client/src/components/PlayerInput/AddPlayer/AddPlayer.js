import React from 'react';
import './AddPlayer.css';

const AddPlayer = ({ firstName, lastName, phoneNumber, playerNumber, handleInputChange, handleAddPlayer, handleClose }) => {
  return (
    <div className="player-modal">
      {/* {console.log({ handleInputChange })} */}
      <div className="modal-content">
        <form>
          <h3>Add a player</h3><hr />
          <label for="first-name">First Name</label>
          <input
            onChange={handleInputChange}
            type="text" id="first-name"
            name="firstName"
            placeholder="Lloyd"
            value={firstName}
          />

          <label for="last-name">Last Name</label>
          <input
            onChange={handleInputChange}
            type="text" id="last-name"
            name="lastName"
            placeholder="Christmas"
            value={lastName}
          />

          <label for="phone-number">Phone Number</label>
          <input
            onChange={handleInputChange}
            type="text" id="phone-number"
            name="phoneNumber"
            placeholder="555-555-5555"
            value={phoneNumber}
          />

          <label for="jersey-number">Jersey Number</label>
          <input
            onChange={handleInputChange}
            type="text" id="jersey-number"
            name="playerNumber"
            placeholder="13"
            value={playerNumber}
          />

          <button onClick={handleAddPlayer} className="add-player" title="Add Player">Add Player</button>

        </form>
        <div>

          <button onClick={handleClose} className="modal-close" title="Close">Close</button>
        </div>
      </div>
    </div>
  )
}



export default AddPlayer
