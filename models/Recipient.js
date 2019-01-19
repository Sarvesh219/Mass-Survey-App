// this Schema records the click of the user along with the email.
const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// export this module for use in 'Survey' schema.
module.exports = recipientSchema;
