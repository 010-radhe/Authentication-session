const { Sign } = require('crypto');
const express=require('express')
const app=express();
const path=require('path')
const signUp=require("./Router/signUp")
const logIn=require("./Router/logIn")
const logout=require("./Router/logout")
const dashboard=require("./Router/dashboard")
const mongoose=require('mongoose');
const userModel=require("./Model/user")
const session=require("express-session")
const mongoDBStore=require("connect-mongodb-session")(session) 


app.listen(8080,()=>{
    console.log("server listening ");
    
})

const store=new mongoDBStore({
    uri:"mongodb://localhost:27017/userAuthentication",
    collection:"mySessions"
})
app.use(session({
    secret:"mysecret",
    resave:false,
    saveUninitialized:false,
    store:store
}))
 
function checkSession(req,res,next){
    
    
    if(req.session && req.session.user){
        next()
    }
    else{
        console.log("not signed in");
        
        res.redirect("/login")
    }
}


async function main(){
    try{
        const connection=await mongoose.connect("mongodb://localhost:27017/userAuthentication")
        console.log("database connected");
    }
    catch(err){
        console.log(err);
    }
}
main()


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")))

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))

 
// app.use("/",signUp)
app.use("/login",logIn)
app.use("/signup",signUp)
app.use("/dashboard",checkSession,dashboard) 
app.use("/logout",checkSession,logout)
 
