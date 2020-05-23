/******************IMPORTING PACKAGE****************************/
const express  = require("express");
const passport = require("passport");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const studentController = require("../controllers/student_controller");

/**********************MAKING ROUTES*****************************/
router.get("/add-student", studentController.addStudent);

router.post("/create-student", studentController.createStudent);

router.get("/all-students/:id", studentController.listStudents); //students of a particular interview

router.get("/all-details", studentController.allDetails);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;