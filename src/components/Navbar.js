import React from 'react';
import '../../src/App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-light navbar-custom">
      <a class="navbar-brand" href="index.html">huddleup</a>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="nav navbar-nav ml-auto nav-links">
          <Link to='/statistics'>
            <li>Statistics</li>
          </Link>
          <Link to='/schedule' >
            <li>Schedule</li>
          </Link>
          <Link to='/roster'>
            <li>Roster</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
