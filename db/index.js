const mongoose = require("mongoose");
const { baseUrl } = require("../config");

mongoose.connect(baseUrl);

const db = mongoose.connection;

module.exports = db;
