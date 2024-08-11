const express = require("express");
const router = express.Router();

const carData = require("../handlers/carData");
const addCar = require("../handlers/addCar");
const upload = require("../middleware/imageUpload");

router.post("/getData", carData.getData);
router.post("/addCar", addCar.addCar);

module.exports = router;
