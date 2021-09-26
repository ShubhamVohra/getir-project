
const mongoose = require("mongoose");

const recordsSchema = new mongoose.Schema({
	key: { type: String, required: true },
	createdAt: { type: Date, required: true },
	counts: [{ type: Number }]

});

const recordModel = mongoose.model("records", recordsSchema);
module.exports = recordModel;