const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const reviewSchema = new Schema(

  {fromUser: String, /*review de User a Bartender*/
  to_id_bartender: String,
  content: String


}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
