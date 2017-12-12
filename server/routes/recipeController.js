const express = require('express'); /* requerimos express para conectarnos al servidor*/
const Recipe = require('../models/Recipe');/* requerimos nuestra clase User*/
const router = express.Router();


/* GET recipes listing. */
router.get('/recipes', (req, res, next) => {
  console.log("GET recipes");
  Recipe.find()
    .then(recipesList => res.status(200).json(recipesList))
    .catch(e => res.status(500).json(e.message));
});


/* GET a single Recipe. */
router.get('/recipes/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

/* CREATE a new Recipe. */
router.post('/recipes',function(req, res) {
  console.log("entro al post")
  const recipe = new Recipe({
    name: req.body.name,
    glass: req.body.glass,
    method: req.body.method,
    ice: req.body.ice,
    ingredients: req.body.ingredients,
    garnish: req.body.garnish,
});

recipe.save()
  .then(result => res.status(200).json(result))
  .catch(e => res.status(500).json(e.message));
});


/* DELETE a Recipe. */
router.delete('/recipes/:id',(req, res) => {

  Recipe.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'Model has been removed!'}))
    .catch(e => res.status(500).json(e.message));


});
module.exports = router;
