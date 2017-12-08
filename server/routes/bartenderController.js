const express = require('express'); /* requerimos express para conectarnos al servidor*/
const Bartender = require('../models/Bartender');/* requerimos nuestra clase Bartender*/
const router = express.Router();

/* GET bartender listing. */
router.get('/bartenders', (req, res, next) => {
  console.log("GET bartenders");
  Bartender.find()
    .then(bartendersList => res.status(200).json(bartendersList))
    .catch(e => res.status(500).json({error:e.message}));
});

/* GET a single bartender. */
router.get('/bartenders/:id', (req, res) => {
  Bartender.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* CREATE a new bartender. */
router.post('/bartenders',function(req, res) {
  console.log("entro al post")
  const bartender = new Bartender({
    username: req.body.username,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    city: req.body.city,
    style: req.body.style,
    description: req.body.description
    // ,
    // imageUrl:req.body.imageUrl
  });

  bartender.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
});

/* EDIT a bartender. */
router.post('/bartenders/:id',(req, res) => {
  const {username, lastname, email, password, city, style, description /*,imageUrl*/ } = req.body;
  const updates = {username, lastname, email, password, city, style, description};

  Bartender.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json({error:e.message}));
});

/* DELETE a bartender. */
router.delete('/bartenders/:id',(req, res) => {

  Bartender.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'Bartender has been removed!'}))
    .catch(e => res.status(500).json(e.message));
});

module.exports = router;
