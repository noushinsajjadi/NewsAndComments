// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

// Create the CommentSchema schema
var CommentsSchema = new Schema({
  // Just a string
  title: {
    type: String
  },
  // Just a string
  body: {
    type: String
  }
});

// Remember, Mongoose will automatically save the ObjectIds of the CommentSchemas
// These ids are referred to in the Article model

// Create the CommentSchema model with the CommentSchemaSchema
var Comments = mongoose.model("Comments", CommentsSchema);

// Export the CommentSchema model
module.exports = Comments;
