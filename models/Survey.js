// 1st, create a schema to contain all the properties to be stored in the db.
const mongoose = require("mongoose");
const { Schema } = mongoose;

// require the subdocument collection from 'Recipient.js'
const RecipientSchema = require("./Recipient");

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model("surveys", surveySchema); // create 'surveys' model and load.

// require this file in index.js.
