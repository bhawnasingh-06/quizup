const mongoose = require('mongoose');
const {Schema}=mongoose;
const QuestionsSchema = new Schema({
    admin:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'admins'
    },
    questiondesc:{
        type: String,
        required: true
    },
    option1:{
        type: String,
        required: true
    },
    option2:{
        type: String,
        required: true
    },
    option3:{
        type: String,
        required: true
    },
    option4:{
        type: String,
        required: true
    },
    correctanswer:{
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
    
  });
//user is the model name here and Userschema is the name of the schema which we are sending 
  module.exports=mongoose.model('questions',QuestionsSchema)