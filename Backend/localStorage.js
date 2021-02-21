<<<<<<< Updated upstream
const token = await res.json();
localStorage.setItem('token', token);
=======
// const token = await res.json();
// localStorage.setItem('token', token);
>>>>>>> Stashed changes

require ("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cor = require("cors");
const crypto = require("crypto");
const bodyParser = require ("body-parser");
const app = express();

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
app.use(bodyParser.json());
app.use(cor());

app.get('/student', authenticationToken, (req, res) => {
    res.json(req.user)
<<<<<<< Updated upstream

    if (localStorage.length )

=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) 
    res.json({ result: accessToken })
    console.log("return the access token to client\n" + accessToken)
=======
     
    // const accessToken = jwt.sign(user,process.body.ACCESS_TOKEN_SECRET)

    if (localStorage.length < 0){
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "86400s"}) 
        res.json({ result: accessToken })
        localStorage.setItem("result",accessToken)
        console.log("return the access token to client\n" + accessToken)
    } else {
        if (localStorage.getItem("result") == accessToken){
            continue;
            console.log("continue the access token to client\n"+ accessToken)
        } else {
            const accessToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "86400s"})  
            res.json({result:accessToken})
            localStorage.setItem("result", accessToken)
            console.log("return the refresh access token to client\n" + accessToken)
        }
        
    }


>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
function generateAccessToken(username) {
    // expires after half and hour (1800 seconds = 30 minutes)
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
}

app.listen(9000, () => {
    console.log("server starts listening at localhost port 9000...")
})
=======
// function generateAccessToken(username) {
//     // expires after half and hour (1800 seconds = 30 minutes)
//     return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
// }

app.listen(9000, () => {
    console.log("server starts listening at localhost port 9000...")
})
>>>>>>> Stashed changes
