const React = require('react');

const userShecma = new Sechma({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}); 

module.exports = userShecma;