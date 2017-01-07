// Libs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Music from './components/Music.jsx';
import Videos from './components/Videos.jsx';
import Merch from './components/Merch.jsx';
import Contact from './components/Contact.jsx';

// routes

const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} title="Home"/>
      <Route path="about" component={About} title="About"/>
      <Route path="music" component={Music} title="Music"/>
      <Route path="videos" component={Videos} title="Videos"/>
      <Route path="merch" component={Merch} title="Merch"/>
      <Route path="contact" component={Contact} title="Contact"/>
    </Route>
  </Router>
);

export default routes;
