/**
 * API version 1.0 routing file
 */

 const express = require('express');
 const router = express.Router();
 
 // questions routes
 router.use('/question', require('./question'))
 
 
 // options routes
 router.use('/option', require('./option'));
 
 module.exports = router;