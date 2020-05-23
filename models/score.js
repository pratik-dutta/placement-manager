/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING RESULT SCHEMA*****************************/
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

/******************MAKING MODEL*********************************/
const Score = mongoose.model("Score", scoreSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Score;