const express = require('express'); /* requerimos express para conectarnos al servidor*/
const User = require('../models/User');/* requerimos nuestra clase User*/
const router = express.Router();

/* GET users listing. */
router.get('/users', (req, res, next) => {
  console.log("GET users");
  User.find()
    .then(usersList => res.status(200).json(usersList))
    .catch(e => res.status(500).json(e.message));
});

/* GET a single User. */
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

/* CREATE a new User. */
router.post('/users',function(req, res) {
  console.log("entro al post")
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });

  user.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
});

/* EDIT a User. */
router.post('/users/:id',(req, res) => {
  const {username, password, email} = req.body;
  const updates = {username, password, email};

  User.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* DELETE a User. */
router.delete('/users/:id',(req, res) => {

  User.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'Model has been removed!'}))
    .catch(e => res.status(500).json(e.message));
});

module.exports = router;
