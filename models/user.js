/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING RESULT SCHEMA*****************************/
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String
    }
});

/******************MAKING MODEL*********************************/
const User = mongoose.model("User", userSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = User;