const mongoose = require('mongoose');
const { Schema } = mongoose;
const FeedbackSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },


    msg: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('feedbacks', FeedbackSchema)