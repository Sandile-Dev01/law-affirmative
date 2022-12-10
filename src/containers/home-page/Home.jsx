import React from 'react';
import { Buttons } from '../../components';
import './home.css';

const Home = () => {
  return (
    <section className="intro-container">

    <div className="container-sub">
      <h1 className="text-center">Top-notch legal services</h1>
      <h3 className="text-center">
        We take pride in helping people from all walks of life achieve the
        justice and peace they deserve.
      </h3>

      <Buttons />
      
    </div>
  </section>
  )
}

export default Home