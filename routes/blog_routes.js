const Blogs = require('../models/blogs');

exports.getBlogs = function(req, res, next) {
  console.log(req);
  const title = req.body.title;
  const tagline = req.body.tagline;
  const content = req.body.content;

  Blogs.find({}, (err, req) => {
    res.json(req.body)
  })
}
exports.newBlog = function(req, res, next) {
  console.log(req.body);
  const title = req.body.title;
  const tagline = req.body.tagline;
  const content = req.body.content;

  const newBlog = new Blogs(req.body);
  newBlog.save((err, req) => {
    res.json(req.body)
  })
}
