const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    _id: { type: Number, required: [true, 'Quiz should have an ID number' ]},
    question: { type: String, required: [true, 'Quiz should have a question'] },
    option1: { type: String, required: [true, 'Quiz should have option1'] },
    option2: { type: String, required: [true, 'Quiz should have option2'] },
    option3: { type: String, required: [true, 'Quiz should have option3'] },
    option4: { type: String, required: [true, 'Quiz should have option4'] },
    answer: { type: String, required: [true, 'Quiz should have an answer'] }
});

module.exports = mongoose.model('Quiz', quizSchema);