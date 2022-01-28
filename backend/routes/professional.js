//require express
const express = require('express');

//get access to the controller
const controller = require('../controller/professional');

//access to the router
const router = express.Router();

// GET /feed/posts
router.get('/', controller.getData);
// localhost:8080/professional/
module.exports = router;