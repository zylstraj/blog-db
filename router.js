const Authentication = require('./routes/user_routes');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
}
