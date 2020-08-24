import React, { useState, useEffect, useContext } from 'react'
import '../../src/App.css';
import Navbar from '../components/Navbar/Navbar';
import AddStats from '../components/PlayerInput/AddStats/AddStats';
import PlayerCard from '../components/PlayerCard/PlayerCard';



function Statistics() {
  const [players, setPlayers] = useState([]);
  const [formObject, setFormObject] = useState({});


  {/* <PlayerCard /> */ }
  return (
    <div>


      <Navbar />
      <h1>Statistics</h1>
      <PlayerCard

      />
      <AddStats />
    </div>
  );
}

export default Statistics;