import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
const currentPage = "contact";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {type: 'info', message: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendFormData = this.sendFormData.bind(this);
  }

  requestBuildQueryString(params) {
    const queryString = [];
    for(let property in params)
      if (params.hasOwnProperty(property)) {
        queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
      }
    return queryString.join('&');
  }

  handleSubmit(event)  {
    event.preventDefault();
    this.setState({type: 'info', message: 'Sending...'}, this.sendFormData);
  }

  sendFormData() {
    const formData = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      subject: ReactDOM.findDOMNode(this.refs.subject).value,
      message: ReactDOM.findDOMNode(this.refs.message).value,
      honeypot: ReactDOM.findDOMNode(this.refs.b_577b2ce3a1cf8d775613cef1f_43764fe831).value
    }
    console.log("formData is: ", formData);
    const xhr = new XMLHttpRequest();
    let _this = this;
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log("Response.status is: ", response);
        if (response.status === 'OK') {
          _this.setState({ type: 'success', message: 'Message received. Thanks!' });
        }
        else {
          _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please email at shayjtoday@gmail.com.' });
        }
      }
    };
    xhr.open('POST', 'sendmail', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(this.requestBuildQueryString(formData));
  }

  render() {
    return (
      <div id={currentPage} className="main-content">
        <h2 className="page-title">{this.props.route.title}</h2>
        <div className="container">
          <div id="booking">
            <div className="booking-box">
              <h3>Booking</h3>
              <a className="email" href="mailto:shayjtodaybookings@gmail.com">shayjtodaybookings@gmail.com</a>
            </div>
          </div>

          <form onSubmit={this.handleSubmit} id="contact-form">
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
               ref="name"
               type="text"
               label="Name"
               name="name">
              </FormControl>
              <ControlLabel>Email*</ControlLabel>
              <FormControl
               ref="email"
               type="email"
               label="Email"
               name="email"
               required>
              </FormControl>
              <ControlLabel>Subject</ControlLabel>
              <FormControl
               ref="subject"
               type="text"
               name="subject"
               label="Subject">
              </FormControl>
              <ControlLabel>Message*</ControlLabel>
              <FormControl
               ref="message"
               componentClass="textarea"
               label="Message"
               name="message"
               required>
              </FormControl>
              <div style={{position: 'absolute', left: -5000 + 'px'}} aria-hidden="true">
                <input
                  type="text"
                  name="b_577b2ce3a1cf8d775613cef1f_43764fe831"
                  tabIndex="-1"
                  ref="b_577b2ce3a1cf8d775613cef1f_43764fe831"
                >
                </input>
              </div>
              <Button id="contact-submit" type="submit">Send</Button>
              <p className={this.state.type}>{this.state.message}</p>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
