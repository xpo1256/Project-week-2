const React = require('react');

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  food: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
    location: {
        type: String,
        required: true
    },
}); 

module.exports = RestaurantSchema;