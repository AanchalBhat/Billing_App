const Joi = require("joi");
const requestHelper = require("../../common/request_helper");
class ListService {
  constructor(BillingModel) {
    this.BillingModel = BillingModel;
    this.getList = this.getList.bind(this);
    this.createList = this.createList.bind(this)

    this._response = {
      status: false,
      message: "Server error! Please try again later!!",
    };
  }
  async createList(body) 
 
    {
      console.log('bb',body)
        try {
            const list = new this.BillingModel({
              product_id: body.product_id,
                quantity: body.quantity,
                rate: body.rate,
                product_name: body.product_name,
               
            })
            await list.save();
            this._response = {
              status: true,
              message: "List Created !!",
              list,
            };
            return requestHelper.respondWithJsonBody(200, this._response);
          } catch (err) {
            this._response = { message: err.message };
            if (err && err.status_code == 400) {
              return requestHelper.respondWithJsonBody(400, this._response);
            }
          return requestHelper.respondWithJsonBody(500, this._response);
          }
        }
  async getList() {
    console.log('h')
    try {
      let result = await this.BillingModel.find();
      if (result) {
        this._response = { status: true, data: result };
        return requestHelper.respondWithJsonBody(200, this._response);
      } else {
        this._response = {
          status: false,
          message: "No list found",
          data: null,
        };
        return requestHelper.respondWithJsonBody(200, this._response);
      }
    } catch (err) {
      this._response = { message: err.message };
      if (err && err.status_code == 400) {
        return requestHelper.respondWithJsonBody(400, this._response);
      }
      return requestHelper.respondWithJsonBody(500, this._response);
    }
  }
}
module.exports = ListService;
