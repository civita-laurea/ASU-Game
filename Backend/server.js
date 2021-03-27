"use strict"
require('dotenv').config({path: 'config.env'})
const express = require('express')
const cor = require('cors')
const crypto = require('crypto')
const bodyParser=require('body-parser');
const app = express();
const auth = require('./controller/router/auth')
const service = require('./controller/router/service')

const port = process.env.PORT || 8088;

app.use(express.json());
app.use(cor())
app.use('/', auth)
app.use('/', service)

app.listen(port, () => {
    console.log("server starts listening at localhost port " + port)
})