const token = await res.json();
localStorage.setItem('token', token);

require ("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cor = require("cors");
const crypto = require("crypto");
const bodyParser = require ("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(cor());

app.get('/student', authenticationToken, (req, res) => {
    res.json(req.user)

    if (localStorage.length )

})

app.post('/login', (req, res) => {
    const userEmail = req.body.email
    const userPwd = req.body.password
    const email = "hongqi@gmail.com"
    const pwd = "1234"
    if(userEmail != email  || userPwd != pwd){
        console.log("incorrect password or email\n" + email + "\n" + pwd)
        res.json({ result: null })
        return;
    }
    console.log("email: " + email + "\npassword: " + pwd)
    //const randomToken = crypto.randomBytes(64).toString('hex')
    //console.log("gennerate random 64 bytes token\n")
    //console.log(randomToken)
    const role = "student" 
    const user = {  email: email,
                    role: role
                 }
    //const accessToken = jwt.sign(user, randomToken)
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) 
    res.json({ result: accessToken })
    console.log("return the access token to client\n" + accessToken)
})
// this method is used to verify the token
function authenticationToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

// username is in the form { username: "my cool username" }
// ^^the above object structure is completely arbitrary
function generateAccessToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.listen(9000, () => {
    console.log("server starts listening at localhost port 9000...")
})