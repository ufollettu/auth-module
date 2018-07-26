const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware').verifyToken;
const can = require('../middleware').can;
const allow = require('../middleware').allow;
const disallow = require('../middleware').disallow;



const PermessiController = require('./../controllers/permessi.controller');

router.get('/',verifyToken, PermessiController.list); // Index

router.post('/', verifyToken, allow()); // Create
router.delete('/', verifyToken, disallow()); // Destroy

module.exports = router;
