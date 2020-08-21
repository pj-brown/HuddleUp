import React from 'react';
import './AddPlayer.css';
import '../AddStats/AddStats';

const AddPlayer = ({ firstName, lastName, phoneNumber, playerNumber, handleInputChange, handleAddPlayer }) => {
  return (
    <div className="player-modal">
      <div className="modal-content">
        <form>
          <h3>Add a player</h3><hr />
          <label for="first-name">First Name</label>
          <input onChange={handleInputChange} type="text" id="first-name" name={firstName} placeholder="Lloyd" />
          <label for="last-name">Last Name</label>
          <input onChange={handleInputChange} type="text" id="last-name" name={lastName} placeholder="Christmas" />
          <label for="phone-number">Phone Number</label>
          <input onChange={handleInputChange} type="text" id="phone-number" name={phoneNumber} placeholder="555-555-5555" />
          <label for="jersey-number">Jersey Number</label>
          <input onChange={handleInputChange} type="text" id="jersey-number" name={playerNumber} placeholder="13" />
        </form>
        <div>
          <button onChange={handleAddPlayer} className="add-player" title="Add Player">Add Player</button>
          <button className="modal-close" title="Close">Close</button>
        </div>
      </div>
    </div>
  )
}

export default AddPlayer
