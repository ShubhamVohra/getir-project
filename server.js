'use strict;'
const express = require("express");
const app =  express();
const bodyparser = require('body-parser');


const db = require("./db/index.js");

var recordRoutes = require('./routes');

const router = express.Router();
var cors = require("cors")

app.use(bodyparser.json())
app.use('/api',router);
recordRoutes(router);
app.use(cors({origin: '*'}))

const appPort = process.env.PORT ? process.env.PORT :4000 
app.listen(appPort, ()=>{
	console.log("listening to port", appPort, " !!");
})

