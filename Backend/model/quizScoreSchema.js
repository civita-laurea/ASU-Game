const mongoose = require('mongoose')

var quizScoreSchema = new mongoose.Schema({
    id: {
        type: Integer,
        required: true,
    }, 
    student: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    score: {
        type: String,
        required: true
    }
})

const quizdb = mongoose.model('quizScoredb', quizScoreSchema);

module.exports = quizScoredb