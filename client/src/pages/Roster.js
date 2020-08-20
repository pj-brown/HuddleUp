import React from 'react';
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import PlayerCard from '../components/PlayerCard/PlayerCard';
import AddPlayer from '../components/PlayerInput/AddPlayer/AddPlayer';
import AddStats from '../components/PlayerInput/AddStats/AddStats';

function Roster() {
  return (
    <div>
      <Navbar />
      <h1>Roster Page</h1>
      <div className="players-container">
        <PlayerCard />
      </div>
      <AddPlayer />
      <AddStats />
    </div>
  );
}

export default Roster;