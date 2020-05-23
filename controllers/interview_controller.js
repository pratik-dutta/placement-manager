/****************IMPORTING PACKAGE/MODELS*************************/
const User = require("../models/user");
const Student = require("../models/student");
const Score = require("../models/score");
const Interview = require("../models/interview");
const Result = require("../models/result");
const passport = require("passport");

/**********EXPORTING FUNCTION FOR listInterview ROUTE******************/
module.exports.listInterviewPage = async function(req, res){
    try{
        let interviews = await Interview.find({})
        .sort("-createdAt"); 
        return res.render("all-interview", {
            interview: interviews
        });
    }catch(err){
        console.log("Error in listing interview --> ", err);
    }
}

/**********EXPORTING FUNCTION FOR addInterview ROUTE******************/
module.exports.addInterview = async function(req, res){
    try{
        return res.render("add-interview");
    }catch(err){
        console.log("Error in adding Interview --> ", err);
    }
}

/**********EXPORTING FUNCTION FOR createInterview ROUTE******************/
module.exports.createInterview = async function(req, res){
    try{
        let interview = await Interview.create({
            company: req.body.company,
            date: req.body.date
        });
        if(interview){
            req.flash("success", "Interview Created");
            console.log("Interview Created");
            return res.redirect("list-interview-page");
        }else{
            console.log("Interview not created");
        }
    }catch(err){
        console.log("Error in creating Interview")
    }
}

/**********EXPORTING FUNCTION FOR scheduleInterview ROUTE******************/
module.exports.scheduleInterview = async function(req, res){
    try{
        let interviewId = req.params.id;
        let interview = await Interview.find({_id: interviewId});
        let student = await Student.find({});
        // console.log(interview[0].company);
        if(interview){
            return res.render("schedule-interview", {
                interview,
                student: student
            });
        }
    }catch(err){
        console.log("Error in scheduling Interview");
    }
}

/**********EXPORTING FUNCTION FOR addStudentInterview ROUTE******************/
module.exports.addSudentInterview = async function(req, res){
    try{
        let interviewId = req.params.id;
        let stuId = req.body.student;
        console.log(interviewId, stuId);
        let inter = await Interview.findOne({_id: interviewId});
        let stu = await Student.findOne({_id: stuId});
        console.log(stu);
        console.log(inter);
        if(inter){
            console.log("1");
            console.log(typeof (stu.interview));
            stu.interview.push(inter._id);
            await stu.save();
            console.log("2");
            inter.student.push(stu._id);
            await inter.save();
            req.flash("success", "Interview created");
            return res.redirect("back");
        }

    }catch(err){
        console.log("Erro in scheduling interview to students --> ", err);
    }
}

/**********EXPORTING FUNCTION FOR saveResult ROUTE******************/
module.exports.saveResult = async function(req, res){
    try{

        let r = await Result.findOne({student: req.params.studentID, interview: req.params.interviewID});
        console.log(r);
        if(r){
            console.log("true");
            r.result = req.body.result;
            r.status = req.body.status;
            await r.save();
            req.flash("success", "Result Saved")
            return res.redirect("back");
            
        }else{
            Result.create({
                student: req.params.studentID,
                interview: req.params.interviewID,
                result: req.body.result,
                status: req.body.status
            }, function(err, result){
                if(err){console.log("Error in creating Result"); return;}
                req.flash("success", "Result Saved");
                return res.redirect("back");
            });
            console.log("false");
        }

    }catch(err){
        console.log("Error in saving data", err);
    }
}