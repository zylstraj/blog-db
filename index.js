'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const path = require('path');

mongoose.Promise = global.Promise;
try {
  mongoose.connect('mongodb://localhost/db');
  console.log('Connected to mongoDB');
} catch(e) {
  console.log('ERROR: could not connec to mongoDB. Is it running? Use mongod');
  process.exit(1);
}

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
router(app);

app.get('/blogs', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server up on port: ' + PORT));
