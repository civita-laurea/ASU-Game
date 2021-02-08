require('dotenv').config()
const express = require('express')
const jwt = require('jsonwebtoken')
const cor = require('cors')
const bodyParser=require('body-parser');
const app = express()
app.use(bodyParser.json());

app.use(cor())

app.post('/login', (req, res) => {
    const email = req.body.email
    const pwd = req.body.password
    if(email != "hongqi@gmail.com" || pwd != "1234"){
        console.log("incorrect password or email\n" + email + "\n" + pwd)
        res.json({result: null })
        return;
    }

    console.log("email: " + email + "\npassword: " + pwd)

    const user = {  email: email,
                    pwd: pwd
                 }
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ result: accessToken })
    console.log("return the access token to client" + accessToken)
})


app.listen(9000, () => {
    console.log("server starts listening at localhost port 9000...")
})