const express = require('express'); /* requerimos express para conectarnos al servidor*/
const User = require('../models/User');/* requerimos nuestra clase User*/
const router = express.Router();

/* GET users listing. Funciona*/
router.get('/users', (req, res, next) => {
  console.log("GET users");
  User.find()
    .then(usersList => res.status(200).json(usersList))
    .catch(e => res.status(500).json(e.message));
});
 /* Get bartenders list Funciona*/
router.get('/users/bartenders', (req, res, next) => {
  console.log("GET only bartenders");
  User.find({isBartender:true})
    .then(bartenderList => res.status(200).json(bartenderList))
    .catch(e => res.status(500).json(e.message));
});

/* GET a single User. Funciona*/
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

/* CREATE a new User. Funciona*/
router.post('/users',function(req, res) {
  console.log("entro al post")
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    isBartender:req.body.isBartender,
    city:req.body.city,
    style:req.body.style,
    description:req.body.description,
  });

  user.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
});

/*Create a new bartender. Funciona*/
router.post('/users/bartenders',function(req, res) {
  console.log("entro al post")
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    city: req.body.city,
    style:req.body.style,
    description:req.body.description,

  });

  user.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
});

router.post('/users/:id',(req, res) => {
  console.log(req.body)
  const {username, email, city, style, description} = req.body;
  const updates = {username, email,city,style,description};
  User.findByIdAndUpdate(req.params.id, updates)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});



/* DELETE a User. */
router.delete('/users/:id',(req, res) => {

  User.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'Model has been removed!'}))
    .catch(e => res.status(500).json(e.message));
});

module.exports = router;
