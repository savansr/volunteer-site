import React,{useState} from 'react';
import axios from 'axios';


const Donate = () => {
   const [amount,setAmount]=useState(0);
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [message,setMessage]=useState('');
   const [disableBtn,setDisableBtn]=useState(false);

   const handleCheckout=async(e)=>{
          e.preventDefault();
        try{
           setDisableBtn(true);
          await axios.post("http://localhost:3500/checkout",{amount,name,email,message},{withCredentials:true,headers:{'Content-Type':'application/json'}})
          .then(res=>{console.log(res.data)})

        }catch(error){
             setDisableBtn(false)
             console.log(error);
        } 
   }

  return (
    <section className='donate'>
       <form onSubmit={handleCheckout}>
        <div>
           <img src="/logo.png" alt="logo" />
        </div>
             <div>
               <label >Show Your Love For Poors</label>
               <input type='number' step='0.01' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Donation Amount (USD)'></input>
             </div>
               <input type="text" placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}  />
               <input type="email" value={email} placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)} />
               <input type="message" value={message} placeholder='Message' onChange={(e)=>setMessage(e.target.value)} />
               <button type='submit' className='btn' disabled={disableBtn}>Donate {amount?`$${amount}`:`$0`} </button>
       </form>

    </section>
  )
}

export default Donate;
