const Blogs = require('../models/blogs');

exports.getBlogs = function(req, res, next) {
  const title = req.body.title;
  const tagline = req.body.tagline;
  const content = req.body.content;

  Blogs.find({}, (err, blog) => {
    if (err) return res.status(500).send(err);
    res.json(blog)
  })
}
exports.newBlog = function(req, res, next) {
  console.log(req.body);
  const title = req.body.title;
  const tagline = req.body.tagline;
  const content = req.body.content;

  const newBlog = new Blogs(req.body);
  newBlog.save((err, req) => {
    if (err) return res.status(500).send(err);
    res.json(req.body)
  })
}
exports.getOneBlog = function(req, res, next) {
    Blogs.findById(req.params.id, (err, blog) => {
      if (err) return res.send(err);
      console.log(blog)
      res.json(blog)
    })
}
exports.deleteBlog = function(req, res, next) {
  Blogs.findById(req.params.id, (err, blog) => {
    blog.remove((err, blog) => {
      if (err) return res.send(err);
      res.json({message: 'Blog removed'})
    })
  })
}
exports.editBlog = function(req, res, next) {
  Blogs.findByIdAndUpdate(req.params.id, req.body, (err, blog) => {
    if (err) return res.send(err);
    res.json(blog);
  })
}
