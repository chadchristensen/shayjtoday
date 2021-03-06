const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const validator = require('validator');
const app = express();
require('dotenv').config()

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static('public'));

app.post('/sendmail', function(req, res) {
  console.log("req.body contains: ", req.body.name);
  const name = req.body.name;
  const email = validator.isEmail(req.body.email) ? req.body.email : "Not a valid email";
  const subject = req.body.subject;
  const message = req.body.message;
  const honeypot = req.body.b_577b2ce3a1cf8d775613cef1f_43764fe831 || "";

  const smtpTrans = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    }
  });

  const mailOpts = {
      from: name + ' &lt;' + email + '&gt;', //grab form data from the request body object
      to: process.env.EMAIL,
      subject: 'SHAYJTODAY - Website contact form',
      html: '<strong>From:</strong> ' + validator.escape(name) + ' &lt;' + validator.escape(email) + '&gt;' + '<br>' +
      '<strong>Subject:</strong> ' + validator.escape(subject) + '<br>' + '<strong>Message:</strong> ' + validator.escape(message)
  };

  if (honeypot === "") {
    smtpTrans.sendMail(mailOpts, function (err, response) {
        //Email not sent
        if (err) {
          console.log("Error")
        }
        //Yay!! Email sent
        else {
          console.log("Success");
        }
    });
  };

  console.log('Name: ' + name + ' Email: ' + email + ' Subject: ' + subject + ' Honeypot: ' + honeypot);
  return res.send({status: 'OK'});
});

const port = 3000;
app.listen(port, function() {
  console.log('Express server listening on port 3000');
});
