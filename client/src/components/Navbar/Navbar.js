import React, { useContext } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/user';
import { auth } from '../../firebase/init';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSignOut = e => {
    localStorage.removeItem('currentUser');
    setUser(null);
    auth.signOut();
    history.push('/');
  }

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <Link to="/main" style={{ textDecoration: "none", color: "white" }}>
          <p style={{ marginLeft: "25px" }}><Logo className="nav-logo" />huddleup</p>
        </Link>
      </div>
      <div className="nav-button-container">
        <ul className="nav nav-links">
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
      <div>
        <p></p>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </nav>
  )
}

export default Navbar
