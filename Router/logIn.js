const Router=require("express").Router();
const logInController=require("../Controller/logIn")
Router.route("/")
.get(logInController.getLogInForm)
.post(logInController.postLogInForm)

module.exports=Router;