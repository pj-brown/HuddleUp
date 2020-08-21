import React from 'react';
import './PlayerCard.css';
import profilepic from './profilepic.png';


const PlayerCard = ({ firstName, lastName, phoneNumber, playerNumber, points, rebounds, assists, gamesPlayed }) => {
  return (
    <div className="playercard">
      <aside className="player-aside">
        <img src={profilepic} style={{ width: "100px" }} />
        <p className="player-name">{firstName} {lastName}</p>
      </aside>

      <div className="player-info">
        <p className="player-phone">Phone Number: {phoneNumber}</p>
        <p className="player-number">Jersey Number: {playerNumber}</p>
        <p className="points">points: {points}</p>
        <p className="rebounds">rebounds: {rebounds}</p>
        <p className="assists">assists: {assists}</p>
        <p className="total-games">Games Played: {gamesPlayed}</p>
      </div>
      <div>
        <button className="editplayer-btn" title="Edit Player">Update</button>
        <button className="editstats-btn" title="Edit Player Stats">Stats</button>
      </div>
    </div>
  )
}

export default PlayerCard
