import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import SignupPage from '../containers/pages/SignupPage';
import SigninPage from '../containers/pages/SigninPage';
import ConfirmEmailPage from '../containers/pages/ConfirmEmailPage';
import DashboardPage from '../containers/pages/DashboardPage';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SigninPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/verify-code" component={ConfirmEmailPage} />
        <Route path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}
