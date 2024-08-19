const user=require("../Model/user")
module.exports.getDashboard=async(req,res)=>{
    
    
    const userId=req.session.user;
    const userInfo=await user.findById(userId);
    res.render('dashboard.ejs',{userInfo});
}
 
