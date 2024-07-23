const mongoose=require('mongoose');

const dbConnection=()=>{
     try{
        mongoose.connect(`${process.env.MONGODB_URI}`,{dbName:'VolunteeringProject'});
        console.log('Connected To DataBase');
     }catch(error){
        console.log('Failed To Connect To DataBase');
     }
}


module.exports=dbConnection;


