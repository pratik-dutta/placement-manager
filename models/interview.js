const mongoose = require("mongoose");

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

const Interview = mongoose.model("Interview", interviewSchema);

module.exports = Interview;