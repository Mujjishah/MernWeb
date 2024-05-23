import React from 'react'
import Routers from './Routes'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>
<div >
  <footer
          className="bg-primary text-center text-lg-start text-white"
         
          >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
    Faith Trail
            </h6>
            <p>
              Our Mission Is To Promote Pakistan Tourism. And Also Guide People How to Perform Hajj & Umrah
            </p>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
           <h6 className="text-uppercase mb-4 font-weight-bold">Home</h6>
           <Link to={'/login'}><p><a className="text-white">Login</a></p></Link>
           <Link to={'/register'}><p><a className="text-white">Register</a>  </p></Link>
           <Link to={'/bookings'}><p><a className="text-white">Booking</a></p></Link>
           
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <Link to={'/about'}><p><a className="text-white">About</a> </p></Link>
            <Link to={'/hajj'}><p><a className="text-white">Hajj</a></p></Link>
            <Link to={'/umrah'}><p><a className="text-white">Umrah</a> </p></Link>
          </div>

          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
      </section>

      <hr className="my-3"/>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
            <div className="p-3">
              © 2024 Copyright |
              <Link to={'/home'}><a className="text-white"> Faith Trail</a></Link>
                
            </div>
          </div>

        </div>
      </section>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer