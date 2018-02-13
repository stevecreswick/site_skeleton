require('dotenv').config();

const express = require('express');
const router = express.Router();

const pseudonym = process.env.PSEUDONYM || 'default';
const siteManifest = require('../manifest')[ pseudonym ] || {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: siteManifest.title });
});

module.exports = router;
