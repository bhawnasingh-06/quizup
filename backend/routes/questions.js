const express = require('express')
const router = express.Router();
const Question = require('../models/Questions');
const { body, validationResult } = require('express-validator');
var fetchAdmin = require('../middleware/fetchAdmin');
//ROUTE 1: Get all the notes using : Get"/api/notes/getuser": login required
router.get('/fetchallquestions', fetchAdmin, async (req, res) => {
    try {
        const questions = await Question.find({ admin: req.admin.id })
        return res.json(questions)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
//ROUTE 2: Add a new question using POST : Get"/api/questions/addquestion": login required
router.post('/addquestion', fetchAdmin, [
    body('questiondesc'),
    body('option1',),
    body('option2',),
    body('option3',),
    body('option4',),
    body('correctanswer',)
], async (req, res) => {
    try {
        const { questiondesc,option1,option2,option3,option4,correctanswer } = req.body;
        //If there are errors, return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const question = new Question({
            questiondesc,option1,option2,option3,option4,correctanswer, admin: req.admin.id
        })
        const savedquestion = await question.save();
        res.json(savedquestion);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

//ROUTE 3: Update an existing note using POST : Get"/api/notes/updatenote": login required
router.put('/updatequestion/:id', fetchAdmin, async (req, res) => {
    const {questiondesc,option1,option2,option3,option4,correctanswer}=req.body;
    //create a new object
    const newQuestion={};
    if(questiondesc){newQuestion.questiondesc=questiondesc};
    if(option1){newQuestion.option1=option1};
    if(option2){newQuestion.option2=option2};
    if(option3){newQuestion.option3=option3};
    if(option4){newQuestion.option4=option4};
    if(correctanswer){newQuestion.correctanswer=correctanswer};

    //Find the note to be updated and update it
    let question=await Question.findById(req.params.id);
    if(!question){res.status(404).send("Not found")}

    if(question.admin.toString()!==req.admin.id){
        return res.status(401).send("Not Allowed");
    }

    question=await Question.findByIdAndUpdate(req.params.id,{$set:newQuestion},{new:true})
    res.json({question});

})

//ROUTE 4: Delete an existing question using delete : Get"/api/questions/deletequestions": login required
router.delete('/deletequestion/:id', fetchAdmin, async (req, res) => {
    try {

    //Find the question to be deleted and delete it
    let question=await Question.findById(req.params.id);
    if(!question){res.status(404).send("Not found")}

    if(question.admin.toString()!==req.admin.id){
        return res.status(401).send("Not Allowed");
    }

    question=await Question.findByIdAndDelete(req.params.id)
    res.json({"Success":"Question has been deleted"});
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    

})
module.exports = router