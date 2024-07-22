const axios=require('axios');
const crypto=require('crypto');
const Volunteer=require('../database/models/volunteer.js');

const cryptomus=axios.create({baseURL:"https://api.cryptomus.com/v1"});

const createInvoice=async(amount)=>{
     try{
        const data={
              amount:amount,
              currency:"USD",
              order_id:crypto.randomBytes(12).toString('hex'),
              url_return:"https://volunteer-website-mern.vercel.app/donate",
              url_success:"https://volunteer-website-mern.vercel.app/",
              life_time:300
        };

       const sign=crypto.createHash('md5').update(Buffer.from(JSON.stringify(data)).toString('base64')+process.env.PAYMENT_API_KEY);
        
     }catch(error){

     }
}
