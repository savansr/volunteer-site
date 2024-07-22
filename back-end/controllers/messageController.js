const Message=require('../database/models/message.js');

const postMessage=async(req,res)=>{
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
}

module.exports=postMessage;
