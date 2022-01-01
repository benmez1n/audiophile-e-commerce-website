import { Link } from "react-router-dom";

const Categories = () => {
    const toTop = () => {
        window.scrollTo({
          top:0,
          behavior : "smooth"
        })
      }
    
    return ( 
        <div className="categories" data-aos="zoom-in" data-aos-duration="3000" >
            <div>
                <img src="../images/shared/image-headphones.png" alt="category-img"/>
                <h1>headphones</h1>
                <Link onClick={toTop}
                    className="to-shop-btn" 
                    to="/headphones">shop<img src="../images/shared/icon-arrow-right.svg" alt=""/></Link>
            </div>
            <div>
                <img src="../images/shared/image-speakers.png" alt="category-img"/>
                <h1>speakers</h1>
                <Link onClick={toTop}
                    className="to-shop-btn" 
                    to="/speakers">shop<img src="../images/shared/icon-arrow-right.svg" alt=""/></Link>
            </div>
            <div>
                <img src="../images/shared/image-earphones.png" alt="category-img"/>
                <h1>earphones</h1>
                <Link onClick={toTop}
                    className="to-shop-btn" 
                    to="/earphones">shop<img src="../images/shared/icon-arrow-right.svg" alt=""/></Link>
            </div>
        </div>
     );
}
 
export default Categories;