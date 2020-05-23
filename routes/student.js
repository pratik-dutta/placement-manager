const express  = require("express");
const passport = require("passport");

const router = express.Router();

const studentController = require("../controllers/student_controller");

router.get("/add-student", studentController.addStudent);

router.post("/create-student", studentController.createStudent);

router.get("/all-students/:id", studentController.listStudents); //students of a particular interview

router.get("/all-details", studentController.allDetails);

module.exports = router;