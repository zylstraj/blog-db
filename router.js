const Authentication = require('./routes/user_routes');
const Blogs = require('./routes/blog_routes');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
  app.get('/blogs', Blogs.getBlogs);
  app.post('/blogs', Blogs.newBlog)
}
