const BillingModel = require("./list/list.model");

const ListService = require("./list/list.service");

module.exports = {
  listService: new ListService(BillingModel),
};
