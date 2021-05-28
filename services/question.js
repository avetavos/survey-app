const Question = require('../models/question');

const getAllQuestions = async (req, res) => {
  const questions = await Question.find();
  return res.status(200).json({ questions });
};

const getQuestionById = async (req, res) => {
  const question = await Question.findById(req.params.id);
  return res.status(200).json(question);
};

const createNewQuestion = async (req, res) => {
  const { name, description, questions } = req.body;

  const newQuestion = new Question({
    name,
    description,
    questions,
  });
  await newQuestion.save();
  return res.status(201).json(newQuestion);
};

const updateQuestionById = async (req, res) => {
  const { name, description, questions } = req.body;
  const updatedQuestion = await Question.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      questions,
    },
    { new: true }
  );
  return res.status(200).json(updatedQuestion);
};

const deleteQuestionById = async (req, res) => {
  await Question.findByIdAndDelete(req.params.id);
  return res.status(200).json({
    message: `Deleted question ${req.params.id} successfully`,
  });
};

module.exports = {
  getAllQuestions,
  getQuestionById,
  createNewQuestion,
  updateQuestionById,
  deleteQuestionById,
};
