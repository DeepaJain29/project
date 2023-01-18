const { application } = require('express');
const express = require('express');
const router=express.Router(); 

const {getAllUsers, postUsers} = require('../controller/user') 

router.get("/getUser",getAllUsers)
router.post('/postUser', postUsers)


module.exports=router