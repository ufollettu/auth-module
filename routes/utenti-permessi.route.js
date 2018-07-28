const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const can = require('../middleware').authCan;
/*-- can(permissionId, userId) NB: userId is optional (it comes form verifyToken req.userId) */


const UtentiPermessiController = require('./../controllers/utenti-permessi.controller');

router.get('/', verifyToken, can(1), UtentiPermessiController.list); // Index
router.post('/', verifyToken, can(1), UtentiPermessiController.create); // Create
// router.put('/:id', verifyToken, UtentiPermessiController.update); // Update
router.delete('/', verifyToken, UtentiPermessiController.destroy); // Destroy

module.exports = router;
