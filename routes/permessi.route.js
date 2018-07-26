const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const can = require('../middleware').can;

const PermessiController = require('./../controllers/permessi.controller');

router.get('/', PermessiController.list); // Index

router.post('/', verifyToken, PermessiController.create); // Create
router.get('/:id', PermessiController.show); // Show one
router.put('/:id', verifyToken, PermessiController.update); // Update
router.delete('/:id', verifyToken, PermessiController.destroy); // Destroy

module.exports = router;
