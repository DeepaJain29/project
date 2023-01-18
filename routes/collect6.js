const { application } = require('express');
const express = require('express');
const router=express.Router(); 

const {getAllUsers6, postUsers6} = require('../controller/collect6') 

router.get("/getUser6",getAllUsers6)
router.post('/postUser6', postUsers6)
module.exports=router