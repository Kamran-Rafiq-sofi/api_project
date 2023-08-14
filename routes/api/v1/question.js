const express= require('express');
const router=express.Router();
const questionsController=require('../../../controllers/api/v1/question_controller');
const optionsController=require('../../../controllers/api/v1/option_controller');
// create question
router.post('/create',questionsController.create)
// delete question
router.delete('/:id/delete',questionsController.delete)
// get question object | details
router.get('/:id',questionsController.getQuestion)
// create option
router.post('/:id/options/create',optionsController.create);
module.exports=router;