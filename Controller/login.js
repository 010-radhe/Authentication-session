const user=require("../Model/user")
const bcrypt=require("bcrypt")
module.exports.getLogInForm=(req,res)=>{
    res.render('login.ejs');
}
module.exports.postLogInForm=async(req,res)=>{
    const {username,password}=req.body;
    const userFind=await user.findOne({username});
    if(!userFind){
        console.log("user not found");
        return res.redirect("/login");
    }
    const isMatch=await bcrypt.compare(password,userFind.password);
    if(isMatch){
        req.session.user=userFind._id.toString();
        res.redirect("/dashboard");
    }
    else{
        console.log("password incorrect");
        res.redirect("/login");
    }
}
