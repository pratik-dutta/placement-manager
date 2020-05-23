const User = require("../models/user");
const Student = require("../models/student");
const Score = require("../models/score");
const Interview = require("../models/interview");
const Result = require("../models/result");
const passport = require("passport");


module.exports.addStudent = async function(req, res){
    try{
        return res.render("add-student");
    }catch(err){
        console.log("error in adding student --> ", err);
    }
}

module.exports.createStudent = async function(req, res){
    try{
        console.log(req.body);
        let student = await Student.create({
            name: req.body.name,
            batch: req.body.batch,
            college: req.body.college,
            
        });

        let score = await Score.create({
            student: student._id,
            webd: req.body.webd,
            react: req.body.react,
            dsa: req.body.dsa
        });

        // let interview = await Interview.create({
        //     company: req.body.company,
        //     date: req.body.date,
        //     student: student._id
        // });

        // let result = await Result.create({
        //     student: student._id,
        //     interview: interview._id,
        //     result: req.body.result
        // });

        student.course_score = score._id;
        // student.interview = interview._id;
        // student.result = result._id;

        await student.save();

        return res.redirect("/main-page");

    }catch(err){
        console.log("Error in creating student --> ", err);
    }
}

module.exports.listStudents = async function(req, res){
    try{
        let interviewId = req.params.id;
        let interview = await Interview.findOne({_id: interviewId}).populate("student");
        // let result = await Result.find({interview: interviewId});
        // console.log(result);
        return res.render("all-students",{
            Interview_company: interview.company,
            Date: interview.date,
            students: interview.student,
            id: interview._id,
            // result
        });
    }catch(err){
        console.log("Erro in listStudents", err)
    }
}

module.exports.allDetails = async function(req, res){
    try{
        let student = await Student.find({}).populate("course_score").populate("interview");
        let result = await Result.find({}).populate("student").populate("interview");
        // .populate("student").populate("interview");
        // console.log("su",stu);
        // console.log("int",stu.interview);
        // return res.status(200).json({
        //     data: student,
        //     res: result
        // });
        return res.render("details", {
            student,
            result
        });

    }catch(err){
        console.log("Error in shoeing all details -->", err)
    }
}