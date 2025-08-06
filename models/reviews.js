const React = require('react');

const reviewsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
}); 

module.exports = reviewsSchema;