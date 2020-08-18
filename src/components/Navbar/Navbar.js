import React from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar">
      <div className="nav-logo-container">
        <p style={{ marginLeft: "25px" }}><Logo className="nav-logo" />huddleup</p>
      </div>
      <div className="nav-button-container">
        <ul class="nav nav-links">
          <Link to='/statistics'>
            <button className="nav-button">Statistics</button>
          </Link>
          <Link to='/schedule' >
            <button className="nav-button">Schedule</button>
          </Link>
          <Link to='/roster'>
            <button className="nav-button">Roster</button>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
