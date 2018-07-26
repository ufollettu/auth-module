const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const userAuthorization = require('../middleware').userAuthorization;

const UtentiController = require('./../controllers/utenti.controller');

router.get('/', UtentiController.list); // Index

router.post('/', verifyToken, UtentiController.create); // Create
router.get('/:id', UtentiController.show); // Show one
router.put('/:id', verifyToken, userAuthorization, UtentiController.update); // Update
router.delete('/:id', verifyToken, userAuthorization, UtentiController.destroy); // Destroy

module.exports = router;
