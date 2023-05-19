const express = require('express')
const smtpRouter = express.Router()
const smtpController = require('../controller/smtp_controller.js')

// This route is for <Create> donner
smtpRouter.route("/")
    .post(smtpController.sendMail)
   





module.exports = smtpRouter; 