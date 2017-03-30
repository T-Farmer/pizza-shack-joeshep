'use strict';

const {Router} = require('express');

const {show} = require('../controllers/contactsCtrl');

const router = Router();

router.get('/contacts', show);

module.exports = router;
