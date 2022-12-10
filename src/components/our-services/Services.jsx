import React from 'react'

const Services = () => {
  return (
    <div className="services-section py-5" id="services">
    <img
      src="https://isithelo.my.canva.site/law-firm/images/ade826ed91f390233f63f087a302e5a1.jpg"
      alt=""
      className="services-img"
    />

    <div className="services-sub-section">
      <h1 className="services-header">Our Services</h1>

      <div className="">
        <p>
          Share your services or specializations here, then list them down as
          bullet points for mobile-friendly easy reading.
        </p>
        <ul>
          <li>We are diversified</li>
          <li>We are based in 50 other regions</li>
          <li>We got the best Lawyers with Masters plus in Law</li>
          <li>We have won 99% of cases in the past 10 years</li>
          <li>We have a money back guarantee policy</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Services