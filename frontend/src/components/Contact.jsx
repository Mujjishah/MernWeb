import React from "react";
function Contact() {
  return (
    <div className="d-flex justify-content-center">
      <form className="text-center border border-light p-5 w-50" action="#!">
        <p className="h4 mb-4">Contact Us</p>
        <input
          type="text"
          id="defaultLoginFormPassword"
          className="form-control mb-4"
          placeholder="Username"
        />

        <input
          type="email"
          id="defaultLoginFormEmail"
          className="form-control mb-4"
          placeholder="E-mail"
        />

        <input
          type="password"
          id="defaultLoginFormPassword"
          className="form-control mb-4"
          placeholder="Password"
        />

        <div className="d-flex justify-content-around">
          <div></div>
          <div></div>
        </div>

        <button className="btn btn-info btn-block my-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
