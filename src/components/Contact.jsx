import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
let currentPage = "contact";

class Contact extends Component {
  handleSubmit(event)  {
    event.preventDefault();
    this.sendFormData();
  }

  sendFormData() {
    var formData = {
      name: React.findDOMNode(this.refs.name).value,
      email: React.findDOMNode(this.refs.email).value,
      subject: React.findDOMNode(this.refs.subject).value,
      message: React.findDOMNode(this.refs.message).value
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var response = JSON.parse(xhr.responseText);
        if (xhr.status === 200 && response.status === 'OK') {
          this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
        }
        else {
          this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
        }
      }
    };
    xhr.open('POST', 'sendmail', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(formData);
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

          <form action="" onSubmit={this.handleSubmit} id="contact-form">
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl
               ref="name"
               type="text"
               label="Name">
              </FormControl>
              <ControlLabel>Email*</ControlLabel>
              <FormControl
               ref="email"
               type="email"
               label="Email"
               required>
              </FormControl>
              <ControlLabel>Subject</ControlLabel>
              <FormControl
               ref="subject"
               type="text"
               label="Subject">
              </FormControl>
              <ControlLabel>Message*</ControlLabel>
              <FormControl
               ref="message"
               componentClass="textarea"
               label="Message"
               required>
              </FormControl>
              <Button id="contact-submit" type="submit">Send</Button>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
