const Router    = require("express").Router();
const dashboardController = require("../Controller/dashboard");
Router.route("/")
.get(dashboardController.getDashboard) 

module.exports = Router;