import React from 'react';
import '../../src/App.css';
import logo from '../assets/logo192.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar">
      <a class="navbar-brand" href="index"><img src="{logo}" alt="huddleup logo" />huddleup</a>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="nav navbar-nav ml-auto nav-links">
          <Link to='/statistics'>
            <button>Statistics</button>
          </Link>
          <Link to='/schedule' >
            <button>Schedule</button>
          </Link>
          <Link to='/roster'>
            <button>Roster</button>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
