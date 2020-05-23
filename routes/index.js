/******************IMPORTING PACKAGE****************************/
const express  = require("express");
const passport = require("passport");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const userController = require("../controllers/user_controller");

/**********************MAKING ROUTES*****************************/
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

router.use("/interview", require("./interview"));

/*****************EXPORTING ROUTER*******************************/
module.exports = router;