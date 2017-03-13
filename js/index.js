import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import ContactListContainer from './components/contact-list-container';
import Contact from './components/contact';

const routes = (
  <Router history={hashHistory}>
    <Route path="/contacts" component={Contact} />
  </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(routes, document.getElementById('app'))
);