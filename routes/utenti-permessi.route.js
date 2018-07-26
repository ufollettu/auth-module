const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const userAuthorization = require('../middleware').userAuthorization;

const UtentiPermessiController = require('./../controllers/utenti-permessi.controller');

router.get('/', UtentiPermessiController.list); // Index

router.post('/', verifyToken, UtentiPermessiController.create); // Create
router.get('/:id', UtentiPermessiController.show); // Show one
router.put('/:id', verifyToken, UtentiPermessiController.update); // Update
router.delete('/:id', verifyToken, UtentiPermessiController.destroy); // Destroy

module.exports = router;
