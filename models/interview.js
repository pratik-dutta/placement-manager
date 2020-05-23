/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING INTERVIEW SCHEMA*****************************/
const interviewSchema = new mongoose.Schema({
    
    company:{
        type:String
    },
    date:{
        type: String
    },
    student: [{
        type: mongoose.Schema.ObjectId,
        ref: "Student"
    }]
});

/******************MAKING MODEL*********************************/
const Interview = mongoose.model("Interview", interviewSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Interview;