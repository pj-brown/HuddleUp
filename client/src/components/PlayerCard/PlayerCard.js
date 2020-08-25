import React from 'react';
import './PlayerCard.css';
import profilepic from './profilepic.png';


const PlayerCard = ({ firstName, lastName, phoneNumber, playerNumber, points, rebounds, assist, gamesPlayed, deletePlayer }) => {
  return (
    <div className="player-card">
      <aside className="player-aside">
        <img src={profilepic} style={{ width: "100px" }} alt="player" />
        <p className="player-name">{firstName} {lastName}</p>
      </aside>

      <div className="player-info">
        <p className="player-phone">Phone Number: {phoneNumber}</p>
        <p className="player-number">Jersey Number: {playerNumber}</p>
        <p className="points">points: {points}</p>
        <p className="rebounds">rebounds: {rebounds}</p>
        <p className="assist">assists: {assist}</p>
        <p className="total-games">Games Played: {gamesPlayed}</p>
      </div>
      <div className="player-buttons">

        <button
          onClick={deletePlayer}
          className="deleteplayer-btn"
          title="Delete Player">
          D
        </button>

        <button className="editplayer-btn" title="Edit Player">U</button>
        <button className="editstats-btn" title="Edit Player Stats">S</button>
      </div>
    </div>
  )
}

export default PlayerCard
