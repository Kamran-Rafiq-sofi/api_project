

const production={
    name:'production',
    name:process.env.API_ENVIRONMENT,
    asset_path:process.env.API_ASSET_PATH,
     session_cookie_key:process.env.API_SESSION_COOKIE_KEY ,
    db:process.env.API_DATABASE,
   

    
}
module.exports=eval(process.env.API_ENVIRONMENT)==undefined? production:eval(process.env.API_ENVIRONMENT);

