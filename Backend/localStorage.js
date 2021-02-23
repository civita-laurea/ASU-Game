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
    headers: {
        'Authorization': 'Bearer' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvbmdxaUBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTYxMzgzNDIyN30.F4_1qRUfAieIdGpjkMVkrndQxDHrZMib2Xr5txX8cL0
        'Content-Type': 'application.json'
    }
})

// const token = await res.json();

// localStorage.setItem('token', token);

// fetch('/user/data', {
//     method: 'GET',
//     headers: {
//       'Authorization': 'Bearer' + authToken
//     }
//   })
//   .then(res => res.json())
//   .then(data => { console.log(data) })
//   .catch(err => { console.log(err) })