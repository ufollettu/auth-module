const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const can = require('../middleware').can;

const UtentiController = require('./../controllers/utenti.controller');

router.get('/', verifyToken, can(3), UtentiController.list); // Index

router.post('/', verifyToken, UtentiController.create); // Create
router.get('/:id', UtentiController.show); // Show one
router.put('/:id', verifyToken, can(3), UtentiController.update); // Update
router.delete('/:id', verifyToken, can(3), UtentiController.destroy); // Destroy

module.exports = router;
