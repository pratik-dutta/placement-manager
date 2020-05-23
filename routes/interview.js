/******************IMPORTING PACKAGE****************************/
const express  = require("express");
const passport = require("passport");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const interviewController = require("../controllers/interview_controller")

/**********************MAKING ROUTES*****************************/
router.get("/list-interview-page", interviewController.listInterviewPage);

router.get("/add-interview", interviewController.addInterview);

router.post("/create-interview", interviewController.createInterview);

router.get("/schedule/:id", interviewController.scheduleInterview);

router.post("/add-student-interview/:id", interviewController.addSudentInterview);

router.post("/save-result/:interviewID/:studentID", interviewController.saveResult);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;