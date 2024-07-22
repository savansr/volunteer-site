const express=require('express');
const postMessage=require('../controllers/messageController');

const router=express.Router();


router.post('/send',postMessage);


module.exports=router;



