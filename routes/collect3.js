const { application } = require('express');
const express = require('express');
const router=express.Router(); 

const {getAllUsers3, postUsers3} = require('../controller/collect3') 

router.get("/getUser3",getAllUsers3)
router.post('/postUser3', postUsers3)
module.exports=router