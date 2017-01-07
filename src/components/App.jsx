import React, { Component } from 'react';
import NavLink from './NavLink.jsx';
import NavBar from './NavBar.jsx';
import MusicPlayer from './MusicPlayer.jsx';
import Footer from './Footer.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <NavBar></NavBar>
        </header>
        { this.props.children }
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
