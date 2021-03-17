const mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

const userdb = mongoose.model('userdb', userSchema);

module.exports = userdb