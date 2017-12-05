const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const bartenderSchema = new Schema(

  {username: { type: String, required: true},
  lastname: { type: String, required: true},
  email: { type: String, required: true},
  password: { type: String, required: true},
  city: { type: String, required: true},
  style: { type: String, required: true},
  description: { type: String, required: true},
  giftCards: []

  /*imageUrl: { type: String},*/
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Bartender = mongoose.model('Bartender', bartenderSchema);
module.exports = Bartender;
