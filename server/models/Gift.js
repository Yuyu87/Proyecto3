const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const giftSchema = new Schema(

  {bartenderID: String, /*experiencia de ese bartender en concreto*/
  to: String,   /*email*/
  price: Number,
  description: String

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Gift = mongoose.model('Gift', giftSchema);
module.exports = Gift;
