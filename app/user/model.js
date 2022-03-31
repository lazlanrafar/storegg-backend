const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email Kategori is required"],
  },
  name: {
    type: String,
    required: [true, "name Kategori is required"],
  },
  password: {
    type: String,
    required: [true, "password Kategori is required"],
  },
  role: {
    type: String,
    Enumerator: ["admin", "user"],
    default: "admin",
  },
  status: {
    type: String,
    Enumerator: ["active", "inactive"],
    default: "active",
  },
  phoneNumber: {
    type: String,
    required: [true, "nomor telepon is required"],
  },
});

module.exports = mongoose.model("User", userSchema);
