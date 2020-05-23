/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING RESULT SCHEMA*****************************/
const studentSchema = new mongoose.Schema({
    name:{
        type: String
    },
    batch: {
        type: String
    },
    college:{
        type:String
    },
    course_score: {
        type: mongoose.Schema.ObjectId,
        ref: "Score"
    },
    interview:[
        {
            type: mongoose.Schema.ObjectId,
            ref: "Interview"
        }
    ]
});

/******************MAKING MODEL*********************************/
const Student = mongoose.model("Student", studentSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Student;