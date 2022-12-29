import React from 'react';
import Image from '../asset/home.jpg';

function LoginHome() {
    return (
        
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src={Image} alt="image" />
                </div>
            </div>
        </div>
    );
}

export default LoginHome;