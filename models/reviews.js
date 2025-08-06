const React = require('react');
const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  restaurant: {
    type: String,
    required: true,
  },
  review: {
    type: String,
    required: false
  },
}); 

module.exports = mongoose.model('reviews', reviewsSchema);