const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    fName: {
        type: String,
        required: true,
      },
      lName: {
        type: String,
      },
      eMail: {
        type: String,
        required: true,
      },
      password: {
        type: String,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      gender: {
        type: String,
        required: true,
      },
      dateOfBirth: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
});

module.exports = mongoose.model('user', UserSchema);