const express = require('express');
const router = express.Router();

const UtentiController = require('./../controllers/utenti.controller');

router.get('/', UtentiController.list); // Index
router.post('/',  UtentiController.create); // Create
router.put('/:id', UtentiController.update); // Update
router.delete('/:id', UtentiController.destroy); // Destroy

module.exports = router;
