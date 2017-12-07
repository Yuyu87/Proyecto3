const express = require('express'); /* requerimos express para conectarnos al servidor*/
const Ticket = require('../models/Ticket');/* requerimos nuestra clase ticket*/
const router = express.Router();

/* GET ticket listing. */
router.get('/tickets', (req, res, next) => {
  console.log("GET tickets");
  Ticket.find()
    .then(ticketsList => res.status(200).json(ticketsList))
    .catch(e => res.status(500).json(e.message));
});

/* GET a single ticket. */
router.get('/tickets/:id', (req, res) => {
  Ticket.findById(req.params.id)
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* CREATE a new ticket. */
router.post('/tickets',function(req, res) {
  console.log("entro al post")
  const ticket = new Ticket({
    creatorID: req.body.creatorID,
    clientID: req.body.clientID,
    options: req.body.options,
  });

ticket.save()
    .then(result => res.status(200).json(result))
    .catch(e => res.status(500).json(e.message));
});

/* EDIT a ticket. */
router.post('/tickets/:id',(req, res) => {
  const {creatorID, clientID, options} = req.body;
  const updates = {creatorID, clientID, options};

  Ticket.findByIdAndUpdate(req.params.id, updates, {new:true})
    .then(p => res.status(200).json(p))
    .catch(e => res.status(500).json(e.message));
});

/* DELETE a ticket. */
router.delete('/tickets/:id',(req, res) => {

  Ticket.remove({_id: req.params.id})
    .then(o => res.status(200).json({message: 'Ticket has been removed!'}))
    .catch(e => res.status(500).json(e.message));
});

module.exports = router;
