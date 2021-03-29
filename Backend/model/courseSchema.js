const mongoose = require('mongoose')

var courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }, 
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const coursedb = mongoose.model('coursedb', courseSchema);

module.exports = coursedb