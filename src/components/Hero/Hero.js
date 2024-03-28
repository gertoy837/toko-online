import React from "react";
import img from "./lenovo.jpeg";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="hero-left">
            <h2 className="hero-title">Laptop Lenovo Gaming 3</h2>
            <h3 className="hero-harga">Rp. 2.000.000.-</h3>
            <p className="hero-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non atque
              corrupti, ipsa vitae ullam error iure consectetur! Commodi, optio
              esse sequi aspernatur voluptatem inventore. Harum debitis sed
              optio iusto tempora.
            </p>
            <button className="hero-button">Beli</button>
          </div>
          <div className="hero-right">
            <img className="hero-image" src={img} alt="hero-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
