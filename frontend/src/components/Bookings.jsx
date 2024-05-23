import React from 'react'
import Navbar from './Navbar'
import { NavigateFunction, Navigate, Link } from 'react-router-dom'
import FirstHotel from '../assets/1hotel.jpg'
import  SecHotel from  '../assets/2hotel.jpg'
import ThirdHotel from '../assets/3hotel.jpg'
import FourthHotel from '../assets/4hotel.jpg'
 import Fifth from '../assets/5hotel.jpg'
import Sixth from '../assets/7hotel.jpg'
import Seventh from '../assets/8hotel.jpg'
import Eigth from '../assets/9hotel.jpg'
import Ninth from '../assets/10hotel.jpg'
import Tenth from '../assets/11hotel.jpg'
import Eleventh from '../assets/12hotel.jpg'
import Twelveth from '../assets/13hotel.jpg'
import Thirteenth from '../assets/14hotel.jpg'
import Fouteenth from '../assets/15hotel.jpg'
import Fifteenth from '../assets/16hotel.jpg'
import Sixteenth from '../assets/17hotel.jpg'
import Seventeenth from '../assets/18hotel.jpg'
import Eighteenth from '../assets/19hotel.jpg'
import Ninteenth from '../assets/20hotel.jpg'



function Bookings() {
  const Card = {
    width: '18rem',
    marginRight: '20px',
    cursor: 'pointer'
  }
  return (
    <div className='my-5'>
<h3 className='mx-5 text-center'>Best Hotels You Can Book.</h3>
<p className='mx-5 text-center'>You Can Get Best Hotels In Pakistan.</p>
<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={FirstHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Regency INN</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 13000</p>
  </div>
</div>

<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={SecHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Pearl Continental</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 20000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={ThirdHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Nishat Hotel</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 104,000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={FourthHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Luxus Grand </h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 10000</p>
  </div>
</div>
</div>
<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Fifth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Aramco</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 9000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Sixth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Gulberg Hotel</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 30000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Seventh} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Beverly INN</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 40000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={Eigth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hotel ONE</h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 18000</p>
  </div>
</div>
</div>

<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}>  <img className="card-img-top" src={Ninth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Airport Hotel</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 28000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={Tenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Amgoc Hotel</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 45000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={Eleventh} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Royal Palace</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 10000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Twelveth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Bambino Hotel</h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 55000</p>
  </div>
</div>
</div>

<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={Thirteenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Grand Taj Hotel</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 65000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Fouteenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hotel Sky</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 10000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Fifteenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Comfort INN</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 70000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Sixteenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hotel Royal </h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 40000</p>
  </div>
</div>
</div>

<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={Seventeenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Kashmir Lodge Hotel</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 50000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={Eighteenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hotel Swiss</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 20000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={Ninteenth} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Serene Hotel</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 80000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={FourthHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hotel Ressort</h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 12000</p>
  </div>
</div>
</div>

<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={FirstHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Sky Lift Hotel</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 14000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={SecHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Swat Hotel</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 30000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={ThirdHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Naran Hotel</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 30500</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={FourthHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Hyper Hotel </h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 19000</p>
  </div>
</div>
</div>

<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={FirstHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Road One Hotel</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 12000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={SecHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">One Stop Hotel</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 5000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={ThirdHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Taj Hotel</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 90000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={FourthHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Luxum Hotel </h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 45000</p>
  </div>
</div>
</div>

<div className="main d-flex justify-content-center mt-5">
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={FirstHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Beverly One Hotel</h5>
    <p className="card-text">This Hotel Is Situated In Lahore Pakistan. In Gulbery. It is very Premium</p>
    <p className="card-text">Rs. 10000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}><img className="card-img-top" src={SecHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Pearl Continental</h5>
    <p className="card-text">There are Multiple Branches Of This Hotel Across The Country.</p>
    <p className="card-text">Rs. 20000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={ThirdHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Nishat Hotel</h5>
    <p className="card-text">One Of The Most Premium Hotel In Country.</p>
    <p className="card-text">Rs. 10000</p>
  </div>
</div>
<div className="card" style={Card}>
<Link to={'/book'}> <img className="card-img-top" src={FourthHotel} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">Grand Hotel </h5>
    <p className="card-text">The Premium Hotel In The Country. It Have Very Nice Ambiance</p>
    <p className="card-text">Rs. 20000</p>
  </div>
</div>
</div>

</div>

  )
}

export default Bookings