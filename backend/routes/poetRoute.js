const express = require('express');
const { createPoet, getPoet } = require('../controller/poetController');

const router = express.Router();

router.post("/createPoet", createPoet);
router.get("/getPoet",getPoet)



module.exports = router