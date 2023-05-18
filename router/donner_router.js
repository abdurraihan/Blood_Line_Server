const express = require("express");
const donnerRouter = express.Router();
const donnerController = require("../controller/donner_controller");

// This route is for <Create> donner
donnerRouter.route("/create").post(donnerController.createDonner);

// This route is for <Update> and <Delete> donner
donnerRouter.route("/update/:email").put(donnerController.updateDonner);

donnerRouter.route("/delete/:email").delete(donnerController.deleteDonner);

// This route is for <Get> donner
donnerRouter.route("/get/:email").get(donnerController.getDonor);

module.exports = donnerRouter;
