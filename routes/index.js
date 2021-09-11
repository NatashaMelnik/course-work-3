const express = require('express');
const router = express.Router();

const articles = require('./articles');
const editors = require('./editors');
const jornalist = require('./jornalist');
const newspaper = require('./newspaper');
const postman = require('./postman');

router.use('/articles/', articles);
router.use('/editors/', editors);
router.use('/jornalist/', jornalist);
router.use('/newspaper/', newspaper);
router.use('/postman/', postman);

module.exports = router;