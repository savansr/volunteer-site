const mongoose=require('mongoose');

const volunteerSchema=new mongoose.Schema({
  name:String,
  email:String,
  amount:{
      type:String,
      required:true
  },
  message:{
    type:String,
    
  }
 
});

const  Volunteer=mongoose.model('Volunteer',volunteerSchema);


module.exports=Volunteer;
