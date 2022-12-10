import React from 'react'
import { Buttons } from '../../components';

const Law = () => {
  return (
    <section className="law-container" id="about-us">
    <div className="law-sub-container">
      <h1 className="">How we deal with the law</h1>
      <h4 className="">
        Our client's bottom line is our top priority. We are in constant
        communication with the people we serve and are committed to advancing
        the immediate needs and wants of our clients. Our team works around
        the clock to provide the necessary services and support that each
        client needs from us.
      </h4>

      <div>
      <Buttons />
      </div>

    </div>

    <img
      src="https://isithelo.my.canva.site/law-firm/images/70c318ad612536d9eb6ca3321361b133.jpg"
      alt=""
      className="sidebar-img"
    />
  </section>
  )
}

export default Law