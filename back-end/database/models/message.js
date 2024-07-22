const mongoose=require('mongoose');
const validator=require('validator');

const messageSchema=new mongoose.Schema({
  
  name:{
    type:String,
    required:true,
    minLength:[3,'Name Must Contain At Least  3 Characters'],
    maxLength:[30,'Name Cannot exceed 30 Characters']
  },
  email:{
      type:String,
       required:true,
       validate:[validator.isEmail,'Provide a Valid Email']
  },
  phone:{
    type:Number,
    required:true,
    minLength:[10,'Phone Must Contain Exact 10 Digits'],
    maxLength:[10,'Phone Must Contain Exact 10 Digits']
  },
  message:{
    type:String
  }
 

});

const  Message=mongoose.model('Message',messageSchema);


module.exports=Message;
