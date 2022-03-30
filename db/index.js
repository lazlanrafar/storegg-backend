const mongoose = require("mongoose");
const { baseUrl } = require("../config");

mongoose.connect(baseUrl, {
  useUnifiedTopology: true,
  // useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

module.exports = db;
