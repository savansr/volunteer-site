const app=require('./index.js');


app.listen(3500,()=>{
     console.log(`Server Listening at Port No. ${process.env.PORT}`);
})