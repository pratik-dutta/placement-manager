const mongoose = require("mongoose");

const scoreSchema = new mongoose.Schema({
    dsa: {
        type: String
    },
    webd:{
        type:String
    },
    react:{
        type: String
    },
    student: {
        type: mongoose.Schema.ObjectId,
        ref: "Student"
    }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;