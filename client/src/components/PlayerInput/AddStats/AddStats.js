import React from 'react';
import './AddStats.css';

const AddStats = () => {
  return (
    <div className="player-modal">
      <div className="modal-content">
        <form>
          <h3>Add stats to "player name"</h3><hr />
          <label for="player-points">Points Scored</label>
          <input type="text" id="player-points" name="playerpoints" placeholder="Add points scored here" />

          <label for="player-rebounds">Rebounds</label>
          <input type="text" id="player-rebounds" name="playerrebounds" placeholder="Add rebounds here" />

          <label for="player-assists">Assists</label>
          <input type="text" id="player-assists" name="playerassists" placeholder="Add assists here" />

        </form>
        <div>
          <button className="add-stats" title="Add Stats">Add Stats</button>
          <button className="modal-close" title="Close">Close</button>
        </div>
      </div>
    </div>
  )
}

export default AddStats
