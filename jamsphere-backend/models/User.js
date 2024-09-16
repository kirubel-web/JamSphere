const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: false }, // Optional for Google users
    email: { type: String, required: true, unique: true },       // Email is required
    password: { type: String, required: false },                 // Optional for Google users
    googleId: { type: String, required: false, unique: true },   // Google OAuth ID
    authType: { type: String, enum: ['local', 'google'], default: 'local' },  // Track auth method
  },
  { timestamps: true },
);

// Hash password before saving (only if local signup)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.authType === 'google') {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;

