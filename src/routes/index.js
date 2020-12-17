const router = require("express").Router();
const listRoutes = require("./list.routes");



router.use("/", listRoutes);



module.exports = router;
