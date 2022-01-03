import { Link } from "react-router-dom";

import { useGlobalContext } from "../helpers/context";

import BestGear from "../components/BestGear";
import Categories from "../components/Categories";

import headphones from "../data/headphonesData"

const Home = () => {
  const {toTop} = useGlobalContext()
    return ( 
        <main className="home">
            <section id="part-one" >
                <div className="container" data-aos="zoom-in" data-aos-duration="2000">
                  <div data-aos="zoom-in" data-aos-duration="3000" >
                    {headphones[1].new && <span>NEW PRODUCT</span>}
                    <h1>{headphones[1].name}</h1>
                    <h1>{headphones[0]}</h1>
                    <p>Experience natural, lifelike audio and 
                    exceptional build quality made for the passionate music enthusiast.</p>
                    <Link onClick={toTop}
                      className="see-product-btn" 
                      to={headphones[1].link}>see product</Link>
                  </div>
                </div>
            </section>
            <div className="container" >
              <Categories />
            </div>
            <div className="container" id="part-two">
                <div id="part-two-1" data-aos="zoom-in" data-aos-duration="3000">
                  <img src="images/home/image-speaker-zx9.png" alt=""/>
                  <div>
                    <h1>ZX9 SPEAKER</h1>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link onClick={toTop}
                        to="/speakers/1" 
                        id="zx9-btn">see product</Link>
                  </div>
                </div>
                <div id="part-two-2" data-aos="zoom-in" data-aos-duration="3000">
                  <div>
                    <h1>ZX7 SPEAKER</h1>
                    <Link onClick={toTop}
                        to="/speakers/2" 
                        id="zx7-btn">see product</Link>
                  </div>
                </div>
                <div id="part-two-3" >
                    <img 
                        src="images/home/image-earphones-yx1.jpg" 
                        alt="" 
                        data-aos="zoom-in" data-aos-duration="3000"
                        />
                    <div data-aos="zoom-in" data-aos-duration="3000">
                      <h1>YX1 EARPHONES</h1>
                      <Link onClick={toTop} 
                          to="/earphones/1" 
                          id="zx7-btn">see product</Link>
                    </div>
                </div>  
                <BestGear/>             
            </div>
        </main>
     );
}
 
export default Home;