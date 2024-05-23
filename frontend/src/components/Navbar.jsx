import React from 'react'
// import About from './About';
// import Home from './Home';
// import Bookings from './Bookings';
// import Login from './Login';
// import Register from './Register'
import Routers from './Routes';
import {
    BrowserRouter as Router,
   
    Link,
  } from "react-router-dom";
  
function Navbar() {
  return (
    <div >
        <nav className="navbar navbar-expand-lg p-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Faith<span>Trail</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link to={'/home'} className='nav-link active'>Home</Link>
          {/* <a className="nav-link active" aria-current="page">Home</a> */}
        </li>
        <li className="nav-item">
        <Link to={'/about'} className='nav-link active'>About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item">
        <Link to={'/bookings'} className='nav-link active'>Booking</Link>
        </li>
        <li className="nav-item">   
        <Link to={'/login'} className='nav-link active'>Login</Link>
        </li>
        <li className="nav-item">   
        <Link to={'/support'} className='nav-link active'>Support</Link>
        </li>
        <li className="nav-item">   
        <Link to={'/contact'} className='nav-link active'>Contact</Link>
        </li>
        <li className="nav-item">   
        <Link to={'/hajj'} className='nav-link active'>Hajj</Link>
        </li>
        <li className="nav-item">   
        <Link to={'/umrah'} className='nav-link active'>Umrah</Link>
        </li>
        {/* <li className="nav-item">
        <Link to={'register'} className='nav-link active'>Register</Link>

        </li> */}

      </ul>
      <form className="d-flex" role="search">
        <Link to={'/register'}><button className="btn btn-outline-success" type="submit">Register</button></Link>
      </form>
    </div>
  </div>
</nav>
{/* <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/book' element={<Booking/>}/>
</Routes> */}
<Routers/>
    </div>
  )
}

export default Navbar