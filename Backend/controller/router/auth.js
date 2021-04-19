"use strict"
const express = require('express')
require('dotenv').config({path: 'config.env'})
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const auth = express.Router();
const app = express()
const connDB = require('../../database/connection')
var Userdb = require('../../model/userSchema')
const mongoose = require('mongoose')
connDB()
auth.route('/signup') 
    .post((req, res) => {
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

        user.save(user)
            .then(data => {
                console.log("server side saved!!!")
                res.json({ message: "success" })
                //mongoose.connection.close()
            })
            .catch(err => {
                res.status(500).send({
                message: err.message
            })
        })
    })

auth.route('/student')
    .get(authenticationToken, (req, res) => {
        res.json(req.user)
    })

auth.route('/login')
    .post((req, res) => {
        const userEmail = req.body.email
        const userPwd = req.body.password
        //connDB()
        Userdb.find({email: userEmail, password: userPwd}, function(err, obj){
            if(err){
                console.log("error message: " + err)
            }else if(obj.length != 0){
                console.log(obj)
                //const randomToken = crypto.randomBytes(64).toString('hex')
                //console.log("gennerate random 64 bytes token\n")
                //console.log(randomToken)
                console.log(obj[0].role)
                const user = { email: obj[0].email, role: obj[0].role }
                //const accessToken = jwt.sign(user, randomToken)
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET) 
                res.json({ result: accessToken, role: obj[0].role })
                console.log("return the access token to client\n" + accessToken)
            }else{
                console.log("incorrect username or password")
                res.json({ result: null })
                return
            }
        }).then(() => {
            //mongoose.connection.close()
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


module.exports = auth