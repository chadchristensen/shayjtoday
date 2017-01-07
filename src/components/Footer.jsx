import React, { Component } from 'react';
import SocialNav from './SocialNav.jsx';
import NewsletterSignUp from './NewsletterSignUp.jsx'
require('./Footer.scss');

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer>
          <div className="container">
            <NewsletterSignUp></NewsletterSignUp>
            <SocialNav></SocialNav>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
