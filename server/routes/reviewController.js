const express = require('express'); /* requerimos express para conectarnos al servidor*/
const Review = require('../models/Review');/* requerimos nuestra clase Review*/
const router = express.Router();

/* GET Review listing. */
router.get('/reviews', (req, res, next) => {
  console.log("GET Reviews");
  Review.find()
    .then(reviewsList => res.status(200).json(reviewsList))
    .catch(e => res.status(500).json({error:e.message}));
});

/* GET a single review. */
router.get('/reviews/:id', (req, res) => {
  Review.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* CREATE a new review. */
router.post('/reviews',function(req, res) {
  console.log("entro al post")
  const review = new Review({
    fromUser: req.body.fromUser,
    to_id_bartender: req.body.to_id_bartender,
    content: req.body.content,
  });

  review.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
});

/* EDIT a review. */
router.post('/reviews/:id',(req, res) => {
  const {fromUser, to_id_bartender, content} = req.body;
  const updates = {fromUser, to_id_bartender, content};

  Review.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* DELETE a Review. */
router.delete('/reviews/:id',(req, res) => {

  Review.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'Review has been removed!'}))
    .catch(e => res.status(500).json(e.message));
});

module.exports = router;
