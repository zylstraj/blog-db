const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require('mongoose');

app.use(bodyParser.json({ type: '*/*'}));
router(app);
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/db');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server up on port: ' + PORT));
