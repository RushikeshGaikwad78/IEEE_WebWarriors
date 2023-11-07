import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './landing';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Homepage from './Homepage';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"  component={Landing} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/homepage" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
