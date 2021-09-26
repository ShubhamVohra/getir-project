
const FilterDataUtil = {}


FilterDataUtil.filter_data_cond = (postBody) => {
    try {

        const createdAtCond = { "$match": {} };

        const { startDate, endDate, minCount, maxCount } = postBody;

        if (startDate) createdAtCond["$match"]["createdAt"] = { "$gte": new Date(startDate) } ;

        if (endDate) createdAtCond["$match"]["createdAt"] = { ...createdAtCond["$match"]["createdAt"]  , ...{ "$lte": new Date(endDate) } } ;

        const countCond = { "$match": {} };

        if (maxCount) countCond["$match"]["totalCount"] = { "$lte": Number(maxCount) };

        if (minCount) countCond["$match"]["totalCount"] = {...countCond["$match"]["totalCount"], "$gte": Number(minCount)};

        const projectCondition = {
            "$project": {
                "key": "$key",
                "createdAt": "$createdAt",
                "totalCount": {
                    "$sum": "$counts"
                }
            }
        }

        const finalCondition = [createdAtCond, projectCondition, countCond];

        return finalCondition;


    } catch (err) {
        console.error("Error in models.filter_data======>", err);
        throw err;
    }
}


module.exports = FilterDataUtil;