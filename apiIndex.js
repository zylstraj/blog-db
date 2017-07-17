'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');
const path = require('path');

const httpProxy = require('http-proxy');

mongoose.Promise = global.Promise;
try {
  mongoose.connect('mongodb://localhost/db');
  console.log('Connected to mongoDB');
} catch(e) {
  console.log('ERROR: could not connec to mongoDB. Is it running? Use mongod');
  process.exit(1);
}

app(router);

const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:5001'
});
app.use('/api', function(req, res) {
  apiProxy.web(req, res);
})

app.use(express.static((path.join(__dirname, 'public')))

app.get('/blogs', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
// mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');

const PORT = process.env.PORT || 5001;
app.listen(3001, function(err) {
  if(err) {
    return console.log(err)
  }
  console.log("On port 5001");
}
