const express = require('express')
const donnerRouter = express.Router()
const donnerController = require('../controller/donner_controller')

// This route is for <Create> donner
donnerRouter.route("/create")
    .post(donnerController.createDonner)


// This route is for <Update> and <Delete> donner
donnerRouter.route("/update/:email")
    .put(donnerController.updateDonner)
    .delete(donnerController.deleteDonner)

donnerRouter.route("/delete/:email")
    .delete(donnerController.deleteDonner)



module.exports =donnerRouter; 