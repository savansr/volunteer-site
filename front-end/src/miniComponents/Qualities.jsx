import React from 'react'

const Qualities = () => {
  


  const qualities=[
    {
      id:1,
      image:'/community.jpg',
      title:'COMMUNITY  DEVELOPMENT',
      description:`Community development is at the core of our efforts. We believe in empowering local communities through sustainable initiatives such as education programs, healthcare access projects, and infrastructure improvements. By collaborating closely with community members and stakeholders, we aim to create meaningful and lasting positive change. Together, we strive to build stronger, more resilient communities where everyone has the opportunity to thrive.`
    },

    {
      id:2,
      image:'/transparency.jpg',
      title:'TRANSPARENCY',
      description:`Transparency is a cornerstone of our organization. We are committed to maintaining open and honest communication with our stakeholders, including volunteers, donors, and the communities we serve. This commitment extends to providing clear information about our activities, finances, and decision-making processes. By being transparent, we foster trust and accountability, ensuring that our actions align with our values and mission.`
    },
    {
      id:3,
      image:'/impact.jpg',
      title:'IMPACT MEASUREMENT',
      description:`Measuring our impact is critical to our success. We use rigorous evaluation methods and data analysis to assess the outcomes of our programs and initiatives. This data-driven approach helps us understand what works, where improvements are needed, and how we can best allocate resources to maximize our impact. By continuously monitoring and evaluating our efforts, we strive to achieve meaningful results and drive positive change in the areas that matter most.`
    },

    

   
];



  return (
    <div className='qualities'>
    <h2>OUR QUALITIES</h2>
    <div className="container">
    {
       qualities.map(element=>{
       return (
             <div className="card" key={element.id}>
                   <div className="img_wrapper">
                     <img src={element.image} alt={element.id} />

                   </div>
                   <div className="content">
                     <p className='title'>{element.title}</p>
                     <p className='description'>{element.description}</p>
                   </div>

             </div>



       )

       })




    }
    </div>
            
    </div>
  )
}

export default Qualities;
