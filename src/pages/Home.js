// import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

import Categories from "../components/Categories";

import headphones from "../data/headphonesData"


const Home = () => {
    return ( 
        <main className="home">
            <section id="part-one">
                <div className="container">
                  <div>
                    {headphones[1].new && <span>NEW PRODUCT</span>}
                    <h1>{headphones[1].name}</h1>
                    <h1>{headphones[0]}</h1>
                    <p>Experience natural, lifelike audio and 
                    exceptional build quality made for the passionate music enthusiast.</p>
                    <Link className="see-product-btn" to={headphones[1].link}>see product</Link>
                  </div>
                </div>
            </section>
            <div className="container">
              <Categories />
            </div>
            <div className="container" id="part-two">
                <div id="part-two-1">
                  <img src="images/home/image-speaker-zx9.png" alt=""/>
                  <div>
                    <h1>ZX9 SPEAKER</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/speakers/zx9-speaker" id="zx9-btn">see product</Link>
                  </div>
                </div>
                <div id="part-two-2">
                  <div>
                    <h1>ZX7 SPEAKER</h1>
                    <Link to="/speakers/zx7-speaker" id="zx7-btn">see product</Link>
                  </div>
                </div>
                <div id="part-two-3">
                    <img src="images/home/image-earphones-yx1.jpg" alt=""/>
                    <div>
                      <h1>YX1 EARPHONES</h1>
                      <Link to="/earphones/yx1-headphones" id="zx7-btn">see product</Link>
                    </div>
                </div>  
                <div id="part-three">
                    <div>
                      <h1>BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h1>
                      <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
                       make Audiophile the best place to buy your portable audio equipment.</p>
                    </div>
                    <img src="images/shared/image-best-gear.jpg" alt=""/>
                </div>                  
            </div>
        </main>
     );
}
 
export default Home;