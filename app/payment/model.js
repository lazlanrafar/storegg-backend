const mongoose = require("mongoose");
let paymentSchema = mongoose.Schema({
  type: {
    type: String,
    required: [true, "Type Pembayaran is required"],
  },
  status: {
    type: String,
    Enumerator: ["active", "inactive"],
    default: "active",
  },
  banks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Bank",
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
