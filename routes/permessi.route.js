const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const userAuthorization = require('../middleware').userAuthorization;

const PermessiController = require('./../controllers/permessi.controller');

router.get('/', PermessiController.list); // Index

router.post('/', verifyToken, PermessiController.create); // Create
router.get('/:id', PermessiController.show); // Show one
router.put('/:id', verifyToken, userAuthorization, PermessiController.update); // Update
router.delete('/:id', verifyToken, userAuthorization, PermessiController.destroy); // Destroy

module.exports = router;
