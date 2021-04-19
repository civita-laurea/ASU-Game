"use strict"
const express = require('express')
require('dotenv').config({path: 'config.env'})
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const service = express.Router();
const app = express()
const connDB = require('../../database/connection')
var Coursedb = require('../../model/courseSchema')
var Quizdb = require('../../model/quizSchema')
var QuizScoredb = require('../../model/quizScoreSchema')

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

service.route('/add/quiz/score')
    .post((req, res) => {
        const name = req.body.name
        const description = req.body.email
        const id = req.body.id
        const score = req.body.score
        console.log(name + ", " + description + "\n" );
        const quizScore = new QuizScoredb({
            id: id,
            student: name,
            email: email,
            score: score
    })

    course.save(quizScore)
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
service.route('/get/quiz/score')
    .get((req, res) => {
        var email = req.body.email;
        var quizId = req.body.quizId
        console.log("get into get course function")
        Coursedb.find({id: quizId, email: email}, function(err, obj){
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
    service.route('/add/quiz')
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

module.exports = service