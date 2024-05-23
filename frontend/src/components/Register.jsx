import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  
  return (
    <div>
      <section >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                    <span className="h1 fw-bold mb-0">Faith Trail</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign Up To Create Account</h5>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example17">UserName</label>

                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example17">Email address</label>

                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" for="form2Example27">Password</label>

                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <Link to={'/register'}><p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!" style={{color: '#393f81'}}>Register here</a></p></Link>
                 
                </form>

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

export default Login