var express = require('express');
var router = express.Router();
const userRoutes = require("./userRoutes")
const {zillowAPI}=require("../controllers/zillowControllers")
const { authMiddleware } = require('../utils/auth');

router.use("/users",userRoutes)

router.use(authMiddleware)

router.post("/zillow",zillowAPI)


module.exports = router;
