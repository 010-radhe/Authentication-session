const user=require("../Model/user")
const bcrypt=require("bcrypt")
module.exports.getSignUpForm=(req,res)=>{
    res.render('signUp.ejs');
}
module.exports.postSignUpForm=async(req,res)=>{
    const {username,email,password}=req.body;
    const userFind=await user.findOne({username});
    if(userFind){
        console.log("user already exists");
        return res.redirect("/signup");
    }
   const hashedPassword=await bcrypt.hash(password,12);
   const newUser=new user({
    username:username,
    email:email,
    password:hashedPassword
   })
   const a=await newUser.save();
   console.log(a);
   
   req.session.user=a._id.toString();

   res.redirect("/login");
}


