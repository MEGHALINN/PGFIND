import React from "react";
import logo from '../../images/logo.png'
import './hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <div className="nav">
        <div className="nav-left">
          <img src={logo} alt=""></img>
        </div>
        <div className="nav-right">
          <a href="/login">Login</a>
        </div>
      </div>
      <div className="hero-cont">
        <div className="hero-left">
          <h1>Discover your dream PG today</h1>

         
            <a href="/login">Join Now</a>
       
        </div>
        <div className="hero-right">
          <img src="https://www.logerchic.com/templates/yootheme/cache/51/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash-51844d0f.jpeg" alt=""></img>
        </div>
      </div>
    </div>
  );
}
