const express = require("express");
const router = express.Router();

const questionService = require('../services/question')

router.get("/", questionService.getAllQuestions);
router.get("/:id", questionService.getQuestionById);
router.post("/", questionService.createNewQuestion);
router.put("/:id", questionService.updateQuestionById);
router.delete("/:id", questionService.deleteQuestionById);

module.exports = router