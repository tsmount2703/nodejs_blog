const express = require('express');
const router = express.Router();
const site = require('../app/controllers/SiteController.js');

router.use('/search', site.search);
router.use('/', site.index);

module.exports = router;
