import React from 'react';
import './AddRoster.css';

const RosterInfo = ({ teamName, city, state, bio }) => {
  return (
    <div className="roster-info">
      <h3>Team name: {teamName}</h3>
      <h3>Location: {city}, {state}</h3>
      <h3>Bio: {bio}</h3>
    </div>
  )
}


export default RosterInfo
