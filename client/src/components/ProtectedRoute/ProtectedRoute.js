import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import UserContext from '../../context/user';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Route {...props} render={routeProps => (
        !!user ? <Component {...routeProps} /> : <Redirect to="/" />
      )} />
    </div>
  )
}

export default ProtectedRoute;
