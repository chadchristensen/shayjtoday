import React, { Component } from 'react';

class SocialNav extends Component {
  render() {
    return (
      <div id="social-nav">
        <ul className="social-nav">
          <li><a target="_blank" href="https://www.facebook.com/shayjtoday"><i className="fa fa-facebook-official"></i></a></li>
          <li><a target="_blank" href="https://www.twitter.com/shayjtoday"><i className="fa fa-twitter"></i></a></li>
          <li><a target="_blank" href="https://www.soundcloud.com/shayj"><i className="fa fa-soundcloud"></i></a></li>
          <li><a target="_blank" href="https://shayj.bandcamp.com"><i className="fa fa-bandcamp"></i></a></li>
          <li><a target="_blank" href="https://www.instagram.com/shayjtoday"><i className="fa fa-instagram"></i></a></li>
          <li><a target="_blank" href="https://www.youtube.com/shayjtoday"><i className="fa fa-youtube"></i></a></li>
        </ul>
      </div>
    );
  }
}

export default SocialNav;
