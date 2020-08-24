import React, { useContext } from 'react';
import './Navbar.css';
import { ReactComponent as Logo } from './logo.svg';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../context/user';
import { auth } from '../../firebase/init';
import { AppBar, Toolbar, IconButton, Button, ButtonGroup, Icon } from '@material-ui/core/';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
    <AppBar className="navbar" position="static">
      <Toolbar>
        <Link to="/main" style={{ textDecoration: "none", color: "white" }}>
          <p><Logo className="nav-logo" />HuddleUp</p>
        </Link>
        <Tabs
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          aria-label="icon tabs example">
          <Tab icon={<PostAddIcon />} aria-label="phone" label="Statistics" component={Link} to={"/statistics"} />
          <Tab icon={<CalendarTodayIcon />} aria-label="favorite" label="Schedule" component={Link} to={"/schedule"} />
          <Tab icon={<PeopleIcon />} aria-label="person" label="Roster" component={Link} to={"/roster"} />
          <Tab icon={<ExitToAppIcon />} aria-label="person" label="Sign Out" onClick={handleSignOut} />
        </Tabs>
      </Toolbar>
    </AppBar >
  )
}

export default Navbar


/*
startIcon={<PeopleIcon />}
startIcon={<CalendarTodayIcon />}
startIcon={<PostAddIcon />}
startIcon={<ExitToAppIcon />}
*/

/*
    // <nav className="navbar">
    //   <div className="nav-logo-container">
    //     <Link to="/main" style={{ textDecoration: "none", color: "white" }}>
    //       <p style={{ marginLeft: "25px" }}><Logo className="nav-logo" />huddleup</p>
    //     </Link>
    //   </div>
    // <div className="nav-button-container">
    //   <ul className="nav nav-links">
    //     <Link to='/statistics'>
    //       <button className="nav-button">Statistics</button>
    //     </Link>
    //     <Link to='/schedule' >
    //       <button className="nav-button">Schedule</button>
    //     </Link>
    //     <Link to='/roster'>
    //       <button className="nav-button">Roster</button>
    //     </Link>
    //   </ul>
    // </div>
    //   <div>
    //     <p></p>
    //     <button onClick={handleSignOut}>Sign out</button>
    //   </div>
    // </nav>
*/