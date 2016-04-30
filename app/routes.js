import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NavBar from './containers/NavBar';
import Hosts from './containers/Hosts';


export default (
  <Route path="/" component={App}>
    <Route path="/hosts" component={Hosts} />
  </Route>
);
