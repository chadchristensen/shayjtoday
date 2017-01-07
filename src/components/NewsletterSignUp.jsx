import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class NewsletterSignUp extends Component {
  render() {
    return (
      <div id="newsletter-sign-up">
        <span className="newsletter-text">Join the mailing list for exclusive content</span>
        <form action="//Com.us3.list-manage.com/subscribe/post?u=577b2ce3a1cf8d775613cef1f&amp;id=43764fe891"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
          >
          <input
           type="email"
           name="EMAIL"
           id="mce-EMAIL"
           placeholder="Enter your email"
           required>
          </input>
          <div style={{position: 'absolute', left: -5000 + 'px'}} aria-hidden="true">
            <input
              type="text"
              name="b_577b2ce3a1cf8d775613cef1f_43764fe891"
              tabIndex="-1"
            >
            </input>
          </div>
          <Button type="submit">Subscribe</Button>
        </form>


      </div>
    );
  }
}

export default NewsletterSignUp;
