import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/Home";
import Login from "../components/Login";
import Bookings from '../components/Bookings'
import Booking from "./Booking";
import Register from "../components/Register";
import About from "../components/About"
import Bot from "./Bot";
import Contact from "./Contact";
import Hajj from "./Hajj";
import Umrah from "./Umrah";
const Routers = () => {
  return (
    <Routes>
    <Route exact path="/" element={<Navigate to="/home" />} />
    <Route exact path="/home" element={<Home/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/bookings' element={<Bookings/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/book' element={<Booking/>}/>
    <Route path='/support' element={<Bot/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/hajj' element={<Hajj/>}/>
    <Route path='/umrah' element={<Umrah/>}/>

    </Routes>
  );
};

export default Routers;
