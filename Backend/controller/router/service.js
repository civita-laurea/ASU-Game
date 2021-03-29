"use strict"
const express = require('express')
require('dotenv').config({path: 'config.env'})
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const service = express.Router();
const app = express()
const connDB = require('../../database/connection')
var Coursedb = require('../../model/courseSchema')

connDB()

service.route('/add/course')
    .post((req, res) => {
        const name = req.body.name
        const description = req.body.description
        const image = req.body.image
        console.log(name + ", " + description + "\n" );
        const course = new Coursedb({
            name: name,
            description: description,
            image: image
    })

    course.save(course)
        .then(data => {
            console.log("server side saved!!!")
            res.json({ message: "success" })
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send({
                message: err.message
            })
        })
})

service.route('/get/courses')
    .get((req, res) => {
        console.log("get into get course function")
        Coursedb.find({}, function(err, obj){
            if(err){
                console.log("error message: " + err)
            }else{
                res.json({ result: obj })
                console.log("data successfully got!")
                console.log(obj) 
                return
            }
        })
    })



module.exports = service