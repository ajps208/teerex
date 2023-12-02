import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
     <div
      className="d-flex flex-column justify-content-center align-items-center "
      style={{ width: "100%", height: "300px" }}
    >
      <div className="footer-content d-flex justify-content-evenly w-100 flex-wrap">
        <div style={{ width: "400px" }} className="website">
        <Link to={'/'} style={{textDecoration:"none",color:"white",fontWeight:"bold"}}><i class="fa-solid fa-shirt"></i> TeeRex</Link>
          <h6  className='text-white'>
            Designed and built with all the love in the world by the Bootstrap
            team with the help of our contributors. Code licensed MIT, docs CC
            BY 3.0. Currently v5.3.2.
          </h6>
        </div>
        <div className="links d-flex flex-column">
          <h4  className='text-white'>Links</h4>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home
          </Link>
          <Link to={"/cart"} style={{ textDecoration: "none", color: "white" }}>
            Cart
          </Link>
          <Link
            to={"/wishlist"}
            style={{ textDecoration: "none", color: "white" }}
          >
            WishList
          </Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4 className='text-white'>Guides</h4>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            React
          </Link>
          <Link to={"/home"} style={{ textDecoration: "none", color: "white" }}>
            React Bootstrap
          </Link>
          <Link
            to={"/watch-history"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Routing
          </Link>
        </div>
        <div className="contact d-flex flex-column flex-wrap">
          <h4  className='text-white'>Contact Us</h4>
          <div className="d-flex">
            <input
              className="form-control"
              placeholder="Enter Your Mail"
              type="text"
            />
            <div className="btn btn-primary ms-3">Subscribe</div>
          </div>
          <div className="d-flex justify-content-evenly mt-3 fs-5">
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i
                className="fa-brands fa-twitter"
                style={{ color: "black" }}
              ></i>
            </Link>
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i class="fa-brands fa-facebook"></i>
            </Link>

            <Link
              to={"/watch-history"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <br />
      <p className='text-light'>Copyright © 2023 E-Cart. Built with React.</p>
    </div>
    </>
  )
}

export default Footer