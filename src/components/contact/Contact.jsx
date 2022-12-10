import React from 'react'

const Contact = () => {
  return (
    <div className="contact-us-section" id="contact">
    <div className="contact-us-sub-section">
      <div className="contact-section">
        <h2>Contact Us</h2>

        <i className="fa-solid fa-location-dot"></i>
        <span>
          720 Sandton City,
          <br />
          Johhanesburg, 2001
          <br />

          <i className="fa-solid fa-phone"></i>
          (012) 4390-2690
          <br />

          <i className="fa-solid fa-envelope"></i>
          anytime@legalgroup.com
        </span>
      </div>

      <div className="contact-section">
        <h2>Office Hours</h2>

        <div>
          <h4 className="day">Monday to Friday</h4>
          <p className="time">9:00 to 6:00 pm</p>

          <h4 className="day">Saturday</h4>
          <p className="time">9:00 to 12:00 noon</p>

          <h4 className="day text-danger">Closed on Sunday</h4>
        </div>
      </div>

      <div className="contact-section">
        <h3>
          <span className="contact-header">Follow us online</span>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </h3>
        <p>
          This is an accessible workplace. Persons with disabilities are
          welcome to apply.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Contact