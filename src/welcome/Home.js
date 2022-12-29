import React from 'react';
import IndiaImage from '../asset/1.jpg';
import USImage from '../asset/2.jpg';
import UKImage from '../asset/3.jpg';
// import Register from '../auth/Register';

import '../css/home.css';

function Home() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={IndiaImage} className="d-block w-100" alt="India" />
        </div>
        <div className="carousel-item">
          <img src={USImage} className="d-block w-100" alt="USA" />
        </div>
        <div className="carousel-item">
          <img src={UKImage} className="d-block w-100" alt="UK" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Home;


