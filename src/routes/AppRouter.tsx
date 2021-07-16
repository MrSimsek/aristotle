import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import SignupPage from '../containers/pages/SignupPage';
import SigninPage from '../containers/pages/SigninPage';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
}
