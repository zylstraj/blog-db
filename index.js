const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./router');

app.use(bodyParser.json({ type: '*/*'}));
router(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server up on port: ' + PORT));
