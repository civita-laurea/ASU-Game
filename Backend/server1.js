require('dotenv').config({path: 'config.env'})
const express = require('express')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
const cor = require('cors')
const crypto = require('crypto')
const bodyParser=require('body-parser');
const app = express()
const connDB = require('./database/connection')
var Userdb = require('./model/userSchema')

app.use(bodyParser.json());
app.use(cor())
app.use(morgan('tiny'))

const port = process.env.PORT;

connDB()

app.post('/signup', (req, res) => {
    const firstrname = req.body.firstname
    const lastname = req.body.lastname
    const username = firstrname + ' ' + lastname
    const email = req.body.email
    const password = req.body.password
    const role = 'studnet'
    console.log(username + ", " + email + ", " + password + ", " + role + "\n" );
    const user = new Userdb({
        username: username,
        email: email,
        password: password,
        role: role
    })

    user
        .save(user)
        .then(data => {
            console.log("server side saved!!!")
            res.json({ message: "success" })
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            })
        })
})

app.get('/student', authenticationToken, (req, res) => {
    res.json(req.user)
})

app.post('/login', (req, res) => {
    const userEmail = req.body.email
    const userPwd = req.body.password
    Userdb.find({email: userEmail, password: userPwd}, function(err, obj){
        if(err){
            console.log("========" + err)
        }else if(obj.length != 0){
            console.log(obj)
            //const randomToken = crypto.randomBytes(64).toString('hex')
            //console.log("gennerate random 64 bytes token\n")
            //console.log(randomToken)
            const user = {  email: obj.email,
                            role: obj.role
                         }
            //const accessToken = jwt.sign(user, randomToken)
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) 
            res.json({ result: accessToken })
            console.log("return the access token to client\n" + accessToken)
        }else{
            console.log("====111====")
            res.json({ result: null })
            return
        }
    })

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

app.listen(port, () => {

    console.log("server starts listening at localhost port " + port)
})