const express=require('express');
const router=express.Router()
const optionsController=require('../../../controllers/api/v1/option_controller')
// delete option 
router.delete('/:id/delete', optionsController.delete); 
// add vote to the option
router.get('/:id/add_vote', optionsController.addVote); 

module.exports = router;