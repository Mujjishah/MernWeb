import React from 'react'
import Hajjpic2 from '../assets/hajj2.jpg'
function Hajj() {
    const myStyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/photo-1579305796288-c534f6cf17ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
        backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '500px'
      }
      const Mask = {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          width: '100%',
          height: '500px'
      }
  return (
    <div>
  <div className=" text-center bg-image" style={myStyle}>
  <div className="mask" style={Mask}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">How To Perform A Hajj</h1>
        <h4 className="mb-3">A Great Guidance For Touring Pakistan as well as Hajj & Umrah </h4>
      </div>
    </div>
  </div>
</div>
<section className='container mt-5 my-5 w-75'>
    <p className=''>Billions of our Muslim brothers and sisters around the world have been undertaking Hajj each year since 629 CE following the migration of Prophet Muhammad (SAW) from Medina to Makkah. For anyone preparing to go, it’s an incredibly exciting time but of course a deeply spiritual, serious and important period of our lives. This handy Hajj guide will help you understand the different aspects of the holy pilgrimage.</p>
    <div className="next">
         <h1>Step-by-step</h1> 
<p>    
 Hajj Guide
SubhanAllah, each and every year around 25,000 Muslims from Ireland travel to the holy cities of Makkah and Medina to perform Hajj, in unity with Muslims from all over the globe. So if you’re one of these next pilgrims heading off to Saudi Arabia to fulfil this sacred pillar, read on! We’ve put together this handy Hajj guide to help you through this blessed journey!
</p>
</div>
<div className='step'>
    <ol>
        <li>Preparation and Intention</li>
        <li>Enter state of Ihram</li>
        <li>Tawaf x7</li>
        <li>Safa and Marwa</li>
        <li>Clip/Shave Hair (Umrah ends)</li>
        <li>Resting and Praying</li>
        <li>Enter state of Ihram</li>
        <li>Arrive at Mina</li>
        <li>Day of Arafah</li>
        <li>Muzdalifah (under the night sky)</li>
        <li>Rami (stoning of the devil)</li>
        <li>Qurbani</li>
        <li>Shave Head</li>
        <li>Tawaf al-Ifadha</li>
        <li>Rami (stoning of the devil)</li>
        <li>Spend night at Mina</li>
        <li>Farewell Tawaf al-Wida</li>
    </ol>
</div>
<div className="main-video d-flex justify-content-center">
<img src={Hajjpic2} autoPlay='true' className='w-75'/>
</div>
<div className="next-content mt-5">
<h1>When can I perform Hajj?</h1>
In Islam, as we work with a lunar calendar (as opposed to the Gregorian calendar), the specific dates for Hajj vary each year. Within the Islamic calendar, Hajj is performed between 8th to 12th of Dhul Hijjah – the last month of the Islamic year.

These days Hajj pilgrims travel to Makkah by air, sea, and land during the days and weeks prior to the pilgrimage period. If you’re traveling from Ireland you are likely to fly to Saudi Arabia, touching down into Jeddah or Medina. From there you will travel with your Hajj group to Makkah.
</div>
</section>
    </div>
  )
}

export default Hajj;