'use strict;'
const FilterDataModel = require('../models/records');


const FilterDataController = {}

FilterDataController.filter_data = async (req, res, next) => {
  const finalResp = {
    "code": 0,
    "msg": "Success",
    "records": []
  }
  try {

    const postBody = req.body;

    const response = await FilterDataModel.filter_data(postBody);

    console.log("Response from db is======>", response);

    finalResp["records"] = response;

    return res.status(200).json(finalResp);


  } catch (err) {
    console.log("Error in FilterDataController.filter_data=====>", err);

    finalResp["code"] = -1;
    finalResp["msg"] = "Failure";

    return res.status(400).json(finalResp);
  }
}


module.exports = FilterDataController;