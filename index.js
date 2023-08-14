const express=require('express')
const path=require('path')
const port=8000;
const db=require('./configs/mongoose');

const cookieParser=require('cookie-parser');
const expressLayouts=require('express-ejs-layouts')
const session=require('express-session');
const MongoStore=require('connect-mongo');




// Environment variable
const env=require('./configs/environment');
// using express from here
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(cookieParser());


// session setup
app.use(session({
    name: 'API',
    // secret: 'APIPOLLING',
    secret: env.session_cookie_key,

    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    store: MongoStore.create({
       
        // mongoUrl:`mongodb://127.0.0.1/${env.db}`,
        mongoUrl:`mongodb+srv://kamranrafiq805:kamranrafiqsofi@cluster0406.8ritmss.mongodb.net/${env.db}`

        collectionName: 'session',
        autoRemove: 'native'
    })
    
}));


// use flash
// app.use(flash());
// app.use(customMware.setflash);


// app.use(express.static(path.join(__dirname, 'assets'))); // public | static file 
app.use(express.static(path.join(__dirname, env.asset_path))); // public | static file 



// ejs setup

app.use(expressLayouts);



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// extract scripts and styles from webpage body
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// setting up different routing file

app.use('/',require('./routes/index'));

// this listens to port
app.listen(port,(err)=>{
    if(err)
    {
      console.log("error in listening to port",err)
      return;
    }
    console.log(`server is up and listening to port at ${port}`);

 })
