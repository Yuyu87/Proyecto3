const express = require('express'); /* requerimos express para conectarnos al servidor*/
const ServiceBartender = require('../models/ServiceBartender');/* requerimos nuestra clase serviceBartender*/
const router = express.Router();

/* GET serviceBartender listing. */
router.get('/serviceBartenders', (req, res, next) => {
  console.log("GET serviceBartender");
  ServiceBartender.find()
    .then(serviceBartenderList => res.status(200).json(serviceBartenderList))
    .catch(e => res.status(500).json(e.message));
});

/* GET a single serviceBartender. */
router.get('/serviceBartenders/:id', (req, res) => {
  ServiceBartender.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* CREATE a new serviceBartender. */
router.post('/serviceBartenders',function(req, res) {
  console.log("entro al post")
  const serviceBartender = new ServiceBartender({
    creatorID: req.body.creatorID,
    price: req.body.price,
    description: req.body.description,
  });

  serviceBartender.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
  });
/* EDIT a serviceBartender. */
router.post('/serviceBartenders/:id',(req, res) => {
  const {creatorID, price, description} = req.body;
  const updates = {creatorID, price, description};

  ServiceBartender.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* DELETE a serviceBartender. */
router.delete('/serviceBartenders/:id',(req, res) => {

  ServiceBartender.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'ServiceBartender has been removed!'}))
    .catch(e => res.status(500).json(e.message));
});

module.exports = router;
