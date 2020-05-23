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

router.use("/interview", require("./interview"));

module.exports = router;