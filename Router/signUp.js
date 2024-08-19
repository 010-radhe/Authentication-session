const Router=require("express").Router();
const signUpController=require("../Controller/signup")
// cons
Router.route("/")
.get(signUpController.getSignUpForm)
.post(signUpController.postSignUpForm)

module.exports=Router;