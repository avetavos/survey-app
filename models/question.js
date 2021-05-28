const { Schema, model } = require("mongoose");

const QuestionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  questions: [
    {
      title: {
        type: String,
        required: true
      },
      correct: {
        type: String,
        required: true
      },
      choices: [
        {
          _id: {
            type: String,
            required: true,
          },
          title: { 
            type: String,
            required: true
          }
        }
      ]
    }
  ]
});

module.exports = Question = model("question", QuestionSchema);