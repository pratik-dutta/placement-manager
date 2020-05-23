/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING RESULT SCHEMA*****************************/
const resultSchema = new mongoose.Schema({
    status:{
        type: String
    },
    interview: {
        type: mongoose.Schema.ObjectId,
        ref: "Interview"
    },
    result:{
        type:String
    },
    student: {
        type: mongoose.Schema.ObjectId,
        ref: "Student"
    }
});

/******************MAKING MODEL*********************************/
const Result = mongoose.model("Result", resultSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Result;