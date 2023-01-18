const { application } = require('express');
const express = require('express');
const routerB=express.Router(); 

const {getAllUsers2, postUsers2} = require('../controller/collect2') 

routerB.get("/getUser2",getAllUsers2)
routerB.post('/postuser2', postUsers2)
module.exports=routerB