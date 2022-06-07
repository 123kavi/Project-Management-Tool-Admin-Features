const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required."],
  },
  email: {
    type: String,
    required: [true, "email is required."],
  },
  password: {
    type: String,
    required: [true, "password is required."],
  }
});


module.exports = mongoose.model("UserSchema", userSchema);