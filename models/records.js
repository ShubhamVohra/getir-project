
const RecordsUtil = require('../util/records/index');
const RecordsSchema = require('../schemas/records');

const FilterDataModel = {};

FilterDataModel.filter_data = async (postBody) => {

    return new Promise((resolve, reject) => {
        try {

            const condition = RecordsUtil.filter_data_cond(postBody);

            console.log("Condition is ======>", JSON.stringify(condition));

            const data =  RecordsSchema.aggregate(condition);

            return resolve(data);
            

        } catch(err) {
            console.error("[Error in FilterDataModel.filter_data]========>",err);
            return reject(err);
        }
    })

}

module.exports = FilterDataModel;