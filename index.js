const express=require('express')
const port=8000;
// using express from here
const app=express();



// this listens to port
app.listen(port,(err)=>{
    if(err)
    {
      console.log("error in listening to port",err)
      return;
    }
    console.log("server is up and listening to port at",port);
    console.log(`server is up and listening to port at ${port}`);

 })