import React from 'react'
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
    <div className='banner'>
     <h1>Volunteers</h1>
     <h3>Needed</h3>
     <p>Join us in making a difference! We are looking for dedicated volunteers
        to contribute their time and skills to our cause. Whether you're passionate
        about community outreach, event planning, or fundraising, there's a place for you here. 
        Together, we can create positive change and support those in need. Sign up today and be part of something meaningful!

      </p>
        <Link to='/donate' className='btn'>Donate Now</Link>
    </div>
    <div className='banner'>
       <img src='/hero.png' alt='hero'></img>
    </div>

 </section>
  )
}

export default Hero;
