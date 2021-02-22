require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cor = require("cors");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cor());

fetch('/login',{
    method: 'GET',

})

// fetch('/user/data', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer' + authToken
//     }
//   })
//   .then(res => res.json())
//   .then(data => { console.log(data) })
//   .catch(err => { console.log(err) })