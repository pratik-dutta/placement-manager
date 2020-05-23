const mongoose = require("mongoose");

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
    ],
    // result:{
    //     type: mongoose.Schema.ObjectId,
    //     ref: "Result"
    // }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;