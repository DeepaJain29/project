const { application } = require('express');
const express = require('express');
const router=express.Router(); 

const {getAllUsers4, postUsers4} = require('../controller/collect4') 

router.get("/getUser4",getAllUsers4)
router.post('/postUser4', postUsers4)
module.exports=router