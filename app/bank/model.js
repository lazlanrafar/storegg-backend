const mongoose = require("mongoose");
let bankSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Pemilik is required"],
  },
  nameBank: {
    type: String,
    required: [true, "Name Bank is required"],
  },
  noRekening: {
    type: String,
    required: [true, "No Rekening is required"],
  },
});

module.exports = mongoose.model("Bank", bankSchema);
