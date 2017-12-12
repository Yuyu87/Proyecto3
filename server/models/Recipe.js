const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
  name: { type: String},
  glass: { type: String},
  method: { type: String},
  ice: {type: String, enum: ['Cubes', 'Crushed','Without']},
  ingredients: { type: String},
  garnish: { type: String}
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
