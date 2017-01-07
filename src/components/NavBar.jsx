import React, { Component } from 'react';
import NavLink from './NavLink.jsx';
require('./NavBar.scss');

class NavBar extends Component {
  render() {
    return (
      <nav className="main-nav">
        <NavLink to="/" id="logo-collapsed"><h1>SHAYJTODAY</h1></NavLink>
        <i id="hamburger" className="fa fa-bars fa-2x"></i>
        <ul className="nav-expanded">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/music">Music</NavLink></li>
          <li id="logo"><NavLink to="/"><h1>SHAYJTODAY</h1></NavLink></li>
          <li><NavLink to="/videos">Videos</NavLink></li>
          <li><NavLink to="/merch">Merch</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
