const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.use(express.static('public'));

app.post('/sendmail', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

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
      text: subject + ' ' + message
  };

  smtpTrans.sendMail(mailOpts, function (err, response) {
      //Email not sent
      if (err) {
        console.log("Error")
      }
      //Yay!! Email sent
      else {
        console.log("Success");
        res.redirect('/');
      }
  });

  console.log('Name: ' + name + ' Email: ' + email + ' Subject: ' + subject);
});

const port = 3000;
app.listen(port, function() {
  console.log('Express server listening on port 3000');
});
