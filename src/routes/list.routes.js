const router = require("express").Router();
const requestHelper = require("../common/request_helper");
const { listService } = require("../services/index");
// const jwtMiddleWare = require('../middleware/jwt-auth')

router.post("/create", async (req, res) => {
  const body = req.body;
  const result = await listService.createList(body);
  return requestHelper.handleResponse(res, result);
});
router.get("/allList", async (req, res) => {
  const result = await listService.getList();
  return requestHelper.handleResponse(res, result);
});
router.get("/search", async (req, res) => {
  const result = await listService.SearchProduct(req);
  return requestHelper.handleResponse(res, result);
});
router.patch("/update", async (req, res) => {
  const result = await listService.UpdateQuantity(req.body);
  return requestHelper.handleResponse(res, result);
});

module.exports = router;
