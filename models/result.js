const mongoose = require("mongoose");

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

const Result = mongoose.model("Result", resultSchema);

module.exports = Result;