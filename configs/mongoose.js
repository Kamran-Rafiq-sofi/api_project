const mongoose=require('mongoose');
const env=require('./environment');
// making db
// const url=`mongodb://127.0.0.1/${env.db}`
const url=`mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/${env.db}`
console.log(env.db);
// connecting to db
mongoose.connect(url);
// getting connection of db
const db=mongoose.connection;
// on error
db.on('error',console.error.bind(console,'Error: Connecting to db'))
// once connection is open(started)
db.once('open',(err)=>{
    if(err)
    {
        console.log('Error:While openning db connection')
    }
    else
    {
       console.log('Db connection is established: Mongodb');
    }
})
module.exports=db;
