import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}
