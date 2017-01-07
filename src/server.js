const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.render('../index.html');
});

app.post('/sendmail', function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;

  console.log('Name: ' + name + ' Email: ' + email + ' Subject: ' + subject);
});

var port = 3000;
app.listen(port, function() {
  console.log('Express server listening on port 3000');
});
