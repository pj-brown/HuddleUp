import React from 'react';
import './App.css';
import Main from './pages/Main';
import Statistics from './pages/Statistics';
import Schedule from './pages/Schedule';
import Roster from './pages/Roster';
import Splash from './pages/Splash';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { Switch, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Splash} />
        <ProtectedRoute path="/main" component={Main} />
        <ProtectedRoute path="/statistics" component={Statistics} />
        <ProtectedRoute path="/schedule" component={Schedule} />
        <ProtectedRoute path="/roster" component={Roster} />
      </Switch>
    </>
  );
}

export default App;