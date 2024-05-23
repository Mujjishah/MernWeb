import React from 'react'
import aboutImg from '../assets/about.jpg'
function About() {
  return (
    <div className='mt-5'>
      <section className="py-3 py-md-5 py-xl-8">
  <div className="container">
    <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
      <div className="col-12 col-lg-6 col-xl-5">
        <img className="img-fluid rounded" loading="lazy" src={aboutImg} alt=""/>
      </div>
      <div className="col-12 col-lg-6 col-xl-7">
        <div className="row justify-content-xl-center">
          <div className="col-12 col-xl-11">
            <h2 className="h1 mb-3">Who Are We?</h2>
            <p className="lead fs-4 text-secondary mb-3">We Guide People How To Explore Pakistan And Also How To Perform Hajj & Umrah</p>
            <p className="mb-5">Our Main Purpose Of This Web Application Is Making It Easier For The Forigners To Know How Bueautiful Pakistan Is And Also Helping Them To Perform Hajj and Umrah In Correct Way.</p>
            <div className="row gy-4 gy-md-0 gx-xxl-5X">
              <div className="col-12 col-md-6">
                <div className="d-flex">
                  <div className="me-4 text-primary">
                    
                  </div>
                 
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default About;