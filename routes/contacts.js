'use strict';

const {Router} = require('express');

const {show, addContact} = require('../controllers/contactsCtrl');

const router = Router();

router.get('/contacts', show);
router.post('/contacts', addContact);

module.exports = router;
