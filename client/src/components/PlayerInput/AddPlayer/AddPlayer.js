import React from 'react';
import './AddPlayer.css';
import '../AddStats/AddStats';

const AddPlayer = () => {
  return (
    <div className="player-modal">
      <div className="modal-content">
        <form>
          <h3>Add a player</h3><hr />
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" name="firstname" placeholder="Lloyd" />
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastname" placeholder="Christmas" />
          <label for="phone-number">Phone Number</label>
          <input type="text" id="phone-number" name="phonenumber" placeholder="555-555-5555" />
          <label for="jersey-number">Jersey Number</label>
          <input type="text" id="jersey-number" name="jerseynumber" placeholder="13" />
        </form>
        <div>
          <button className="add-player" title="Add Player">Add Player</button>
          <button className="modal-close" title="Close">Close</button>
        </div>
      </div>
    </div>
  )
}

export default AddPlayer
