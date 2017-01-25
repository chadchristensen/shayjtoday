import React, { Component } from 'react';
let currentPage = "music";
require('./Music.scss');

class Music extends Component {
  render() {
    return (
      <div id={currentPage} className="main-content">
        <h2 className="page-title">{this.props.route.title}</h2>
        <div className="container">
          <div className="album-container">
            <h3>Huey Vs Riley EP (2011)</h3>
            <iframe
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/281377009&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false">
            </iframe>
          </div>
          <div className="album-container">
            <h3>Lost in a Vast Abyss of Hip Hop (2009)</h3>
            <iframe
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/280491516&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false">
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;
