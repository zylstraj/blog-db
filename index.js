const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(router);


mongoose.Promise = global.Promise;
try {
  mongoose.connect('mongodb://localhost/db');
  console.log('Connected to mongoDB');
} catch(e) {
  console.log('ERROR: could not connec to mongoDB. Is it running? Use mongod');
  process.exit(1);
}

// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server up on port: ' + PORT));
