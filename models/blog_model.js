const mongoose = require('mongoose');

const blogContentSchema = new mongoose.Schema({
  subheading: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // image:{
  //     type : [],
  //     required : false
  // }
});

// Create a Mongoose schema for the main blog post
const blogSchema = new mongoose.Schema({
  mainHeading: {
    type: String,
    required: true
  },
  Introduction: {
    type: String,
    required: true
  },
  Conclusion: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  image: {
    type: Object,
    required: false
  },
  subheadings: [blogContentSchema] // Subheadings and their content are stored as an array of blogContentSchema
}, {timestamps : true});

const blog = mongoose.model('blog', blogSchema);
module.exports = blog;