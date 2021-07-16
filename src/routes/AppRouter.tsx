import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignupPage from '../containers/pages/SignupPage';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignupPage} />
      </Switch>
    </Router>
  );
}
