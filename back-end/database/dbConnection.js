const mongoose=require('mongoose');

const dbConnection=()=>{
     try{
        mongoose.connect("mongodb+srv://savansr26:vNkPLR2JNXc9zWvp@cluster-1.jby1wf8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1",{dbName:'VolunteeringProject'});
        console.log('Connected To DataBase');
     }catch(error){
        console.log('Failed To Connect To DataBase');
     }
}


module.exports=dbConnection;


