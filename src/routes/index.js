const router = require("express").Router();
const listRoutes = require("./list.routes");



router.use("/list", listRoutes);



module.exports = router;
