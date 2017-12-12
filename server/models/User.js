const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String},
  password: { type: String},
  email: { type: String},
  isBartender: { type:Boolean, default:false},
  city: { type: String},
  style: { type: String},
  description: { type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
