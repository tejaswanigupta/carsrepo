
const express = require('express')
let router = express.Router()

const {
   getCars,putCars,postCars,deleteCars,carcolors
} = require("../controllers/carController");
const cars = require('../models/carData');

router.route("/").get(getCars);
router.route("/").put(putCars);
router.route("/").post(postCars);
router.route("/").delete(deleteCars);

router.route("/colors").get(carcolors);

module.exports = router;