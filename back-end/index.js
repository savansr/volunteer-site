const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const cors = require('cors');
const dbConnection = require('./database/dbConnection');
const Message = require('./database/models/message.js');
const Volunteer = require('./database/models/volunteer.js');


const stripe = require('stripe')(`${process.env.SECRET_KEY}`);




app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://volunteer-website-chi.vercel.app');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.use(
  cors({
    origin:'https://volunteer-website-chi.vercel.app',
    methods: ['POST'],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//send route

app.post('/send', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please Fill All The Fields'
    });
  }

  try {
    await Message.create({ name, email, phone, message });
    return res.status(201).json({
      success: true,
      message: 'Message Sent Successfully'
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      const errorMessage = validationErrors.join(',');
      return res.status(400).json({
        success: false,
        message: errorMessage
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Internal Server Error'
      });
    }
  }
});








//checkout route


app.post('/checkout', async (req, res) => {
  const { amount, name, email, message } = req.body;

  if (!name || !email || !amount || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please Fill All The Fields'
    });
  }

  try {
    await Volunteer.create({ name, email, amount, message });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation Amount'
            },
            unit_amount: amount * 100
          },
          quantity: 1
        }
      ],
      mode: 'payment',
      success_url: `${process.env.FRONT_END_URL}`,
      cancel_url: `${process.env.FRONT_END_URL}`
    });

    const url=session.url;
    
    res.json({ url });


  }
   catch (error) {
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      const errorMessage = validationErrors.join(',');
      return res.status(400).json({
          message: errorMessage
      });
      
    } else {
      console.error('Error creating checkout session:', error.message);
      return res.status(500).json({
        message: 'Internal Server Error'
      });
    } 
  }
});



app.listen(process.env.PORT,()=>{
  console.log(`Server Listening at Port No. ${process.env.PORT}`);
})










dbConnection();

module.exports = app;
