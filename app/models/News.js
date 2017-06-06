// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create News schema
var NewsSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true
  },
  // link is a required string
  link: {
    type: String,
    required: true
  },
  // This only saves one note's ObjectId, ref refers to the Note model
  Comments: {
    type: Schema.Types.ObjectId,
    ref: "Commnets"
  }
});

// Create the News model with the NewsSchema
var News = mongoose.model("News", NewsSchema);

// Export the model
module.exports = News;
