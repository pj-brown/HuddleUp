import React from 'react';
import './PlayerCard.css';
import profilepic from './profilepic.png';


const PlayerCard = () => {
  return (
    <div className="playercard">
      <aside className="player-aside">
        <img src={profilepic} alt="yer boy pat" style={{ width: "100px" }} />
        <p className="player-name">Player Name</p>
      </aside>

      <div className="player-info">
        <p className="position">Position: </p>
        <p className="player-number">Number: </p>
        <p className="ppg">PPG: </p>
        <p className="rpg">RPG: </p>
        <p className="apg">APG: </p>
      </div>
      <div>
        <button className="editplayer-btn" title="Edit Player"></button>
        <button className="editstats-btn" title="Edit Player Stats"></button>
      </div>
    </div>
  )
}

export default PlayerCard
