const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
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

module.exports = mongoose.model('restaurant', RestaurantSchema)