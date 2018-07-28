const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;

const PermessiController = require('./../controllers/permessi.controller');

router.get('/',verifyToken, PermessiController.list); // Index
router.post('/', PermessiController.create); // Create
router.delete('/', PermessiController.destroy); // Destroy

module.exports = router;
