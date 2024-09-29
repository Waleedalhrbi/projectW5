import React from 'react';
import {Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar bg-opacity-[0%] z-50 fixed top-0 left-0 w-full">
      
   
      <img
        src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
        alt="Logo"
        className="h-3 lg:hidden absolute right-0 top-0 m-4"
      />

    
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li> <Link to={`/`}>HOME</Link></li>
            <li><Link to={`/about`}>ABOUT</Link></li>
            <li><a href="#">REVIEWS</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><Link to={`/conent`}>CONTACT</Link></li>
          </ul>
        </div>
      </div>


      <div className="navbar-center hidden lg:flex items-center space-x-4">
        <img
          src="https://websitedemos.net/food-blogger-04/wp-content/uploads/sites/793/2021/03/food-blogger-site-logo.svg"
          alt="Logo"
          className="h-7"
        />
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li> <Link to={`/`}  className="text-sm font-medium text-[#c99484]">HOME</Link></li>
          <li><Link to={`/about`}>ABOUT</Link></li>
          <li><a href="#">REVIEWS</a></li>
          <li><a href="#">VIDEOS</a></li>
          <li><Link to={`/conent`}>CONTACT</Link></li>
        </ul>
      </div>

      
      <div className="navbar-end  items-center space-x-4 hidden lg:flex">
        <a href="#">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png"
            alt=""
            className="h-6 w-6"
          />
        </a>
        <a href="#">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"
            alt=""
            className="h-6 w-6"
          />
        </a>
        <a href="#">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"
            alt=""
            className="h-6 w-6"
          />
        </a>

        <a
          href="/contact"
          className="border border-white text-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-black rounded-none transition-colors duration-300"
        >
          LET'S TALK
        </a>
      </div>
    </div>
  );
}

export default NavBar;
