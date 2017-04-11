const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
  title: String,
  tagline: String,
  content: String
})

const BlogsClass = mongoose.model('blogs', blogsSchema);

module.exports = BlogsClass;
