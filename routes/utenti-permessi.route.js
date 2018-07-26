const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const can = require('../middleware').can;

const UtentiPermessiController = require('./../controllers/utenti-permessi.controller');

router.get('/', UtentiPermessiController.list); // Index

router.post('/', verifyToken, UtentiPermessiController.create); // Create
router.get('/:id&:key', UtentiPermessiController.show); // Show one
router.put('/:id&:key', verifyToken, UtentiPermessiController.update); // Update
router.delete('/:id&:key', verifyToken, UtentiPermessiController.destroy); // Destroy

module.exports = router;
