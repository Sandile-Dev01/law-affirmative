import React from 'react';

let OpenNav = () => {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "50px";
}

let CloseNav = () => {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const Navbar = () => {
  return (

    <nav>
      <img
        src="https://i2.wp.com/sellerslawgroup.com/wp-content/uploads/2018/12/cropped-Sellers-Law-Group-LLC-Favicon.png?ssl=1"
        alt="logo"
      className="logo"
      />

      <div className="nav-links-section d-none d-sm-flex">
        <a href="#" className="nav_links">Home</a>
        <a href="#about-us" className="nav_links">About Us</a>
        <a href="#services" className="nav_links">Services</a>
        <a href="#feedback" className="nav_links">Feedback</a>
        <a href="#contact" className="nav_links">Contact</a>
      </div>

      <div id="mySidebar" className="sidebar">
        <a href="javascript:void(0)" className="closebtn" onClick={CloseNav}>×</a>
        <a href="index.html">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#feedback">Feedback</a>
        <a href="#contact">Contact</a>
      </div>

      <div id="main">
        <button className="openbtn d-inline-block d-sm-none" onClick={OpenNav}>
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar