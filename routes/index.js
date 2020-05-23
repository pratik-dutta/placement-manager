const express  = require("express");
const passport = require("passport");

const router = express.Router();

const userController = require("../controllers/user_controller");

router.post("/signup", userController.signUp);

router.post("/signin", passport.authenticate(
    "local",
    {failureRedirect: "/"},

), userController.signIn);

router.get("/signuppage", userController.signUpPage)

router.get("/", userController.signInPage);

router.get("/signout", userController.signOut);


router.get("/main-page", userController.mainPage);

router.use("/student", require("./student"));
// router.get("/add-student", userController.addStudent);

// router.post("/create-student", userController.createStudent);

router.use("/interview", require("./interview"));
// router.get("/list-interview-page", userController.listInterviewPage);

// router.get("/add-interview", userController.addInterview);

// router.post("/create-interview", userController.createInterview);

// router.get("/all-students/:id", userController.listStudents); //students of a particular interview

// router.get("/schedule/:id", userController.scheduleInterview);

// router.post("/add-student-interview/:id", userController.addSudentInterview);

// router.post("/save-result/:interviewID/:studentID", userController.saveResult);

// router.get("/all-details", userController.allDetails);

module.exports = router;