const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const dbConnection=require('./database/dbConnection');
const messageRouter=require('./router/messageRouter.js');
const Message=require('./database/models/message.js');


dotenv.config({path:'./config.env'});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  app.use(cors(
    {
     origin:'http://localhost:5173',
     methods:["POST"],
     credentials:true,
    
    }
));



  
  app.use(express.json());
  app.use(express.urlencoded({extended:true}))



app.post('/send',async(req,res)=>{
    const {name,email,phone,message}=req.body;

    if(!name || !email || !phone || !message){
         return res.status(400).json({
             success:false,
             message:"Please Fill All The Fields"
         });
    }
    try{
        await Message.create({name,email,phone,message});
        return  res.status(201).json({
            success:true,
            message:"Message Sent Successfully"
        });
    }catch(error){
          if(error.name==='ValidationError'){
             const ValidationErrors=Object.values(error.erros).map((err)=>err.message);
             const errorMessage=ValidationErrors.join(",");
             return res.status(400).json({
               success:false,
               message:'Internal Server Error'
             })
          }
    }



}) 

app.post('/checkout',async(req,res)=>{
    const {amount,name,email,message}=req.body;
    


})

dbConnection();

module.exports=app;