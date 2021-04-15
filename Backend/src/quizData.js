//jshint esversion:6

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/quizDB', {useNewUrlParser: true, useUnifiedTopology: true});

// const quizSchema = new mongoose.Schema({
//     _id: { type: Number, required: [true, 'need an ID number' ]},
//     question: { type: String, required: [true, 'need enter a String'] },
//     option1: { type: String, required: [true, 'need enter a String'] },
//     option2: { type: String, required: [true, 'need enter a String'] },
//     option3: { type: String, required: [true, 'need enter a String'] },
//     option4: { type: String, required: [true, 'need enter a String'] },
//     answer: { type: String, required: [true, 'need enter a String'] }
// });

// const Quiz = mongoose.model("Quiz", quizSchema);

const quiz1 = new Quiz({
    _id: 1,
    question: "My ones digit is 4, my tens digit is 8. What number am I?",
    option1: "48",
    option2: "8",
    option3: "84",
    option4: "4",
    answer: "84"
});

// quiz.save();
// const quiz2 = new Quiz({
//     _id: 2,
//     question: "Eric has 11 balloons and Ernie has 8 balloons. How many balloons do they have altogether?",
//     option1: "17",
//     option2: "18",
//     option3: "19",
//     option4: "20",
//     answer: "19"
// });

// const quiz3 = new Quiz({
//     _id: 3,
//     question: "Ida has 13 beads and Irene has 14 beads. How many beads do they have altogether?",
//     option1: "26",
//     option2: "27",
//     option3: "28",
//     option4: "29",
//     answer: "27"
// });

// const quiz4 = new Quiz({
//     _id: 4,
//     question: "Minnie has 19 internet friends and Mo has 27 different internet friends. How many internet friends do they have altogether?",
//     option1: "43",
//     option2: "44",
//     option3: "45",
//     option4: "46",
//     answer: "46"
// });

// const quiz5 = new Quiz({
//     _id: 5,
//     question: "Nev has 17 CDs and Nigel has 12 different CDs. How many CDs do they have altogether?",
//     option1: "28",
//     option2: "29",
//     option3: "30",
//     option4: "31",
//     answer: "29"
// });

// const quiz6 = new Quiz({
//     _id: 6,
//     question: "Pippa has 10 books and Paul has twice as many books as Pippa. How many books does Paul have?",
//     option1: "12",
//     option2: "20",
//     option3: "21",
//     option4: "22",
//     answer: "20"
// });

// const quiz7 = new Quiz({
//     _id: 7,
//     question: "Ros has twice as many new emails as Rachel, and Rachel has 14 new emails. How many new emails does Ros have?",
//     option1: "28",
//     option2: "26",
//     option3: "24",
//     option4: "16",
//     answer: "28"
// });

// const quiz8 = new Quiz({
//     _id: 8,
//     question: "Ros has twice as many new emails as Rachel, and Rachel has 14 new emails. How many new emails does Ros have?",
//     option1: "3",
//     option2: "1",
//     option3: "5",
//     option4: "4",
//     answer: "4"
// });

// const quiz9 = new Quiz({
//     _id: 9,
//     question: "Hunter started with 8 chocolates and added 4 more every week until she had 24 altogether. How many weeks did that take?",
//     option1: "1",
//     option2: "4",
//     option3: "6",
//     option4: "3",
//     answer: "4"
// });

// const quiz10 = new Quiz({
//     _id: 10,
//     question: "What is the next number in this sequence? 75, 79, 83, ___",
//     option1: "84",
//     option2: "80",
//     option3: "87",
//     option4: "89",
//     answer: "87"
// });

// const quiz11 = new Quiz({
//     _id: 11,
//     question: "What is the next number in this sequence? 7, 11, 15, ___",
//     option1: "16",
//     option2: "15",
//     option3: "20",
//     option4: "19",
//     answer: "19"
// });

// const quiz12 = new Quiz({
//     _id: 12,
//     question: "Albert started with 14 trash bags and threw away 1 every week until he had 10 trash bags left. How many weeks did that take?",
//     option1: "2 weeks",
//     option2: "3 weeks",
//     option3: "4 weeks",
//     option4: "5 weeks",
//     answer: "4 weeks"
// });

// const quiz13 = new Quiz({
//     _id: 13,
//     question: "Angel started with 75 marbles and added 3 more every week until she had 87 altogether. How many weeks did that take?",
//     option1: "3 weeks",
//     option2: "4 weeks",
//     option3: "5 weeks",
//     option4: "6 weeks",
//     answer: "4 weeks"
// });

// export {quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10, quiz11, quiz12, quiz13};

export default quiz1;