const Router = require("express").Router();

Router.route("/")
.get((req,res)=>{
    req.session.user=null; 
    req.session.destroy();
    res.redirect("/login");

})

module.exports = Router;