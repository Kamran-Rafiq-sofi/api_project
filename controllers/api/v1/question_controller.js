const Question=require('../../../models/question');
const Option=require('../../../models/option');
/*
  create a question
  takes the title from body of request
  check whethet question already exits or not...if no create a question
*/
module.exports.create=async function(req,res){
    try{
        const{title}=req.body;
        const existingQuestion=await Question.findOne({'title':title});
        if(existingQuestion)
        {
            return res.status(401).json({
                message:'Question already exists',
                status:'failure',
                data:[{id:existingQuestion._id}]
            });
        };

        const question=await Question.create({'title':title});
        return res.status(200).json({
            message:'Question Successfully created',
            status:'successful',
            data:[question]
        });
    }catch(error){
        console.log('Getting error in creating question', error);
        return res.status(500).json({
            message:'Internal Server Error',
            status:'failure',
            data:[]
        });

    }
}
/*
   delete question
   takes question id from request parameters
   check whether question id is right or wrong
   if id is valid we frist delet all options of question and then question from db
*/
module.exports.delete= async function(req,res){
    try
    {
       const questionId=req.params.id;
       if(!questionId)
       {
            return res.status(404).json({
                   message:'Question Id not found',
                   status:'failure',
                   data:[]
                });
       };


       const question=await Question.findById(questionId);
       if(!question)
       {
            return res.status(404).json({
                   message:'Invalid question id',
                   status:'failure',
                   data:[]
                })
       };
       await Question.deleteMany({ '_id':{$in:questionId}});
       await Question.findByIdAndDelete(questionId);
       return res.status(200).json({
            message:'Question successfully deleted',
            status:'success',
            data:[]
          });
    }catch(error)
    {
        console.log("Error in deleting question", error);
        return res.status(500).json({
              message:'Internal server error',
              status:'failure',
              data:[]
           });
    };
}
/**
  get details of question
  take question id from parametres and check whether its right or wrong
  populate the options array and send it to user
*/
module.exports.getQuestion = async function(req,res){
    try{
        const questionId=req.params.id;
        if(!questionId){
            return res.status(404).json({
               message:'Empty Question id',
               status:'failure',
               data:[]
            });
        };
        const question=await Question.findById(questionId);
        if(!question){
            return res.status(404).json({
                message:'No Question found or Invalid Question id',
                status:'failure',
                data:[]

            });
        };
        await question.populate({path:'options',select:'-question_id'});
        return res.status(200).json({
            message:'Question fetched successfully',
            status:'successful',
            data:[question]

        });
    }catch(error){
        console.log('error in fetching question',error);
        return res.status(500).json({
            message:'Internal server error',
            status:'failure',
            data:[]

        });
    };
}