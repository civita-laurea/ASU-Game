require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()


app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }
    
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
})


app.listen(9000, () => {
    console.log("server starts listening at localhost port 9000...")
})