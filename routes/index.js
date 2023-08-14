const express=require('express');
const router=express.Router();
console.log("router loaded")
const homeConmtroller=require('../controllers/home_controller')
router.get('/', homeConmtroller.renderHomePage)
// using api router
router.use('/api',require('./api/index'));
module.exports = router