const { application } = require('express');
const express = require('express');
const router=express.Router(); 

const {getAllUsers5, postUsers5} = require('../controller/collect5') 

router.get("/getUser5",getAllUsers5)
router.post('/postUser5', postUsers5)
module.exports=router