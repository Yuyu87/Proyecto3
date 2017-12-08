const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bartenderSchema = new Schema({
  username: { type: String},
  lastname: { type: String},
  email: { type: String},
  password: { type: String},
  city: { type: String},
  style: { type: String},
  description: { type: String}
  // ,
  // imageUrl: { type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Bartender = mongoose.model('Bartender', bartenderSchema);
module.exports = Bartender;
