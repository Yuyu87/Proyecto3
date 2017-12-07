const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema({
  fromUser: { type: Schema.Types.ObjectId, ref: 'User' }, /*review de User a Bartender*/
  to_id_bartender:{ type: Schema.Types.ObjectId, ref: 'Bartender'},
  content: { type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
