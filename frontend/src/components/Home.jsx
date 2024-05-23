import React, { useEffect, useState } from 'react'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import hotel from '../assets/h1.jpg'
import resort from '../assets/reso.jpg'
import villa from '../assets/villa.jpg'
import FirstHotel from '../assets/1hotel.jpg'
import SecHotel from '../assets/2hotel.jpg'
import ThirdHotel from '../assets/3hotel.jpg'
import FourthHotel from '../assets/4hotel.jpg'
import { Link } from 'react-router-dom'
import Routers from './Routes'
function Home() {

    const myStyle = {
      backgroundImage: `url(${process.env.PUBLIC_URL + 'https://images.unsplash.com/flagged/photo-1558113118-e42e558b352a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})`,
      backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '500px'
    }
    const Mask = {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        height: '500px'
    }
    const Card = {
      width: '18rem',
      marginRight: '20px',
    }
  return (
    <div>

        <div className=" text-center bg-image" style={myStyle}>
  <div className="mask" style={Mask}>
    <div className="d-flex justify-content-center align-items-center h-100">
      <div className="text-white">
        <h1 className="mb-3">Welcome To Faith Trail</h1>
        <h4 className="mb-3">A Great Guidance For Touring Pakistan as well as Hajj & Umrah </h4>
       <Link to={'/bookings'}><a className="btn btn-outline-light btn-lg" href="#!" role="button">Wanted to do Bookings!</a></Link> 
      </div>
    </div>
  </div>
</div>
<section className='mt-5 text-center'>
  <h1>Places You Can Visit.</h1>
  <p>Best Places You Can Visit In Pakistan.</p>
  <div className='d-flex mt-5 justify-content-center'>
<div className="card" style={Card}>
<Link to='/bookings'><img className="card-img-top" src={card5} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Multan Is Very Historical Place You Can Visit In Pakistan. Multan Is Famous For Its Sweet</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to='/bookings'> <img className="card-img-top" src={card1} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Lahore Is Also Known As Heart Of Pakistan. It is famous For Old Buildings</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to='/bookings'><img className="card-img-top" src={card2} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Karachi Is The Biggest City of Pakistan. It is Famous For Its Foods</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to='/bookings'><img className="card-img-top" src={card4} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Islamabad Is The Capital of Pakistan. It is Famous For Its Views</p>
  </div>
</div>
</div>
</section>
<section className='mt-5'>
<h3 className='mx-5 text-center'>Browse By Category.</h3>
<p className='mx-5 text-center'>You Can Browse Between Properties.</p>

  <div className='d-flex justify-content-center mt-5'>
<div className="card border-0 " style={Card}>
<Link to='/bookings'> <img className="card-img-top rounded" src={hotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Hotel</p>
  </div>
  </div>
<div className="card border-0" style={Card}>
<Link to='/bookings'><img className="card-img-top rounded" src={resort} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Resort</p>
  </div>
</div>
<div className="card border-0" style={Card}>
<Link to='/bookings'> <img className="card-img-top rounded" src={villa} alt="Card image cap"/></Link>
  <div className="card-body">
    <p className="card-text">Villas</p>
  </div>
</div>
</div>
</section>
<section className='mt-5 my-5'>
<h3 className='mx-5 text-center'>Best Hotels You Can Book.</h3>
<p className='mx-5 text-center'>You Can Get Best Hotels In Pakistan.</p>
  <div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
  <Link to='/bookings'><img className="card-img-top" src={FirstHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hotel One</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 13000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to='/bookings'><img className="card-img-top" src={SecHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Pearl Continental</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 25000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to='/bookings'><img className="card-img-top" src={ThirdHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Nishat Hotel</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 104,000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to='/bookings'><img className="card-img-top" src={FourthHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Luxus Grand </h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 18000</p>
  </div>
</div>
</div>
</section>
<Routers/>
</div>



  )
}

export default Home