import React from 'react';
import './AddStats.css';

const AddStats = () => {
  return (
    <div className="player-modal">
      <div className="modal-content">
        <form>
          <h3>Add stats to a player</h3><hr />
          <label for="player-number">Player's Number</label>
          <input type="text" id="player-number" name="playerNumber" placeholder="Add the player's number here" />

          <label for="player-points">Points Scored</label>
          <input type="text" id="player-points" name="playerPoints" placeholder="Add points scored here" />

          <label for="player-rebounds">Rebounds</label>
          <input type="text" id="player-rebounds" name="playerRebounds" placeholder="Add rebounds here" />

          <label for="player-assists">Assists</label>
          <input type="text" id="player-assists" name="playerAssists" placeholder="Add assists here" />

          <label for="player-games-played">Games Played</label>
          <input type="text" id="player-games-played" name="playerGamesPlayed" placeholder="Add games played here" />

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
