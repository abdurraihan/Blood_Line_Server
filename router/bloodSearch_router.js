const express = require('express')
const bloodSearchRouter = express.Router()
const bloodSearch_controller = require('../controller/bloodSearch_controller.js');

bloodSearchRouter.route('/all')
    .get(bloodSearch_controller.getAllDonner)

bloodSearchRouter.route('/')
    .get(bloodSearch_controller.get_single_blood_group)



module.exports = bloodSearchRouter; 