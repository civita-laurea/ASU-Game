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
        console.log(name + ", " + description + ", " + image + "\n" );
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
            res.status(500).send({
                message: err.message + ".!!..."
            })
        })
})



module.exports = service