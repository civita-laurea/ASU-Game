require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cor = require("cors");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cor());

const email = "hongqi@gmail.com"
const role = "studnet"
const user = {
                email :email,
                role: role
            }
if (localStorage.lenth <= 0){
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    localStorage.setItem("token", accessToken)
    console.log("accept the access token from the server\n" + accessToken)
} else {
    if (localStorage.getItem("token") == accessToken){
        fetch('/login', {

            method: 'GET',
            headers: {
                'Content-Type': 'application.json',
                'Authorization': 'Bearer' + process.env.ACCESS_TOKEN_SECRET
            }
        })
        console.log("continue to use the current token\n" + accessToken)
    } else {
        
    }
}


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