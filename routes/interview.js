const express  = require("express");
const passport = require("passport");

const router = express.Router();

const interviewController = require("../controllers/interview_controller")

router.get("/list-interview-page", interviewController.listInterviewPage);

router.get("/add-interview", interviewController.addInterview);

router.post("/create-interview", interviewController.createInterview);

router.get("/schedule/:id", interviewController.scheduleInterview);

router.post("/add-student-interview/:id", interviewController.addSudentInterview);

router.post("/save-result/:interviewID/:studentID", interviewController.saveResult);

module.exports = router;