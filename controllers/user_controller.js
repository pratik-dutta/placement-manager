const User = require("../models/user");
const Student = require("../models/student");
const Score = require("../models/score");
const Interview = require("../models/interview");
const Result = require("../models/result");
const passport = require("passport");

module.exports.signUp = async function(req, res){
    try{
        let user = await User.findOne({ email: req.body.email});
        if(user){
            req.flash("error", "User Already Existed");
            return res.redirect("signin-page");
        }else{
            if(req.body.password == req.body.confirmpassword){
                User.create({
                    email: req.body.email,
                    password: req.body.password
                }, function(err, user){
                    if(err){console.log("error in creating new user", err); return;}
                    console.log("User created successfully")
                    return res.render("signin-page");
                });
            }else{
                console.log("password is not matching");
                req.flash("error", "Password is not matching");
                return res.redirect("signup-page");
            }
        }
    }catch(err){
        console.log("Error in signing Up the user --> ", err);
        return;
    }
}

module.exports.signInPage = async function(req, res){
    try{
        if(req.isAuthenticated()){
            return res.redirect("/main-page");
        }
        return res.render("signin-page");
    }catch(err){
        console.log("Error in SignIn Page ---> ", err);
    }
}

module.exports.signUpPage = async function(req, res){
    try{
        if(req.isAuthenticated()){
            return res.redirect("/main-page");
        }
        return res.render("signup-page");
    }catch(err){
        console.log("Error in SignIn Page ---> ", err);
    }
}

module.exports.signIn = async function(req, res){
    try{
        req.flash("success", "Logged In successfully");
        return res.redirect("main-page");
    }catch(err){
        console.log("Error in signing in the user ---> ", err);
    }
}


module.exports.mainPage = async function(req, res){
    try{
        if(!req.isAuthenticated()){
            return res.redirect("/");
        }
        let details = await Student.find({})
        .sort("-createdAt")
        .populate("course_score")
        .populate("interview")
        .populate("result");
        return res.render("main-page", {
            detail: details
        });
    }catch(err){
        console.log("Error in mainPage --> ",err)
    }
}

module.exports.signOut = async function(req, res){
    req.logout();
    req.flash("success", "Sign Out Successfully");
    return res.redirect("/");
}






