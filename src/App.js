import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Statistics from './pages/Statistics';
import Schedule from './pages/Schedule';
import Roster from './pages/Roster';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/statistics" component={Statistics} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/roster" component={Roster} />
      </div>
    </Router>
  );
}

export default App;