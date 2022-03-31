const mongoose = require("mongoose");
let transaksiSchema = mongoose.Schema({
  historyVoucherTopup: {
    gameName: { type: String, required: [true, "Name game is required"] },
    category: { type: String, required: [true, "kategori is required"] },
    thumbnail: { type: String },
    coinName: { type: String, required: [true, "nama koin is required"] },
    coinQuantity: { type: String, required: [true, "jumlah koin is required"] },
    price: { type: String, required: [true, "price is required"] },
  },
  historyPayment: {
    name: { type: String, required: [true, "Name is required"] },
    type: { type: String, required: [true, "type is required"] },
    bankName: { type: String, required: [true, "Name bank is required"] },
    noRekening: { type: String, required: [true, "no rekening is required"] },
  },
  name: {
    type: String,
    required: [true, "name is required"],
  },
  accountUser: {
    type: String,
    required: [true, "name akun is required"],
  },
  tax: {
    type: Number,
    default: 0,
  },
  value: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "pending",
    Enumerator: ["pending", "success", "failed"],
  },
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Player",
  },
  historyUser: {
    name: { type: String, required: [true, "Name player is required"] },
    phoneNumber: {
      type: String,
      required: [true, "nomor telepon is required"],
    },
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Transaction", transaksiSchema);
