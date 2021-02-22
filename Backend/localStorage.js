require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cor = require("cors");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const app = express();

