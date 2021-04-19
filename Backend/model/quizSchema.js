const mongoose = require('mongoose')

var quizSchema = new mongoose.Schema({
    id: {
        type: Integer,
        required: true,
        unique: true
    }, 
    question: {
        type: String,
        required: true
    },
    option1: {
        type: String,
        required: true
    },
    option2: {
        type: String,
        required: true
    },
    option3: {
        type: String,
        required: true
    },
    option4: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
})

const quizdb = mongoose.model('quizdb', quizSchema);

module.exports = quizdb