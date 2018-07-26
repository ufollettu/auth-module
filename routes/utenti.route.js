const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const can = require('../middleware').can;

const UtentiController = require('./../controllers/utenti.controller');

router.get('/', verifyToken, can(2), UtentiController.list); // Index

router.post('/', verifyToken, UtentiController.create); // Create
router.get('/:id', verifyToken, can(3), UtentiController.show); // Show one
router.put('/:id', UtentiController.update); // Update
router.delete('/:id', UtentiController.destroy); // Destroy

module.exports = router;
