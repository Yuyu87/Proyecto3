const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const serviceBartenderSchema = new Schema({
  creatorID: { type: Schema.Types.ObjectId, ref: 'Bartender'},
  price: { type:Number},
  description: {type:String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const ServiceBartender = mongoose.model('ServiceBartender', serviceBartenderSchema);
module.exports = ServiceBartender;
