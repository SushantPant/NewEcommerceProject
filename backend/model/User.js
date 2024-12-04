const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
