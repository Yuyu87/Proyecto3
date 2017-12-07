const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ticketSchema = new Schema({
  creatorID: { type: Schema.Types.ObjectId, ref: 'User'},
  ref: { type: Schema.Types.ObjectId, ref: 'ServiceBartender'},
  options: {type: String, enum: ['It´s for me', 'It´s a gift']},
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
