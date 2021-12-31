import { Link } from "react-router-dom";

const Categories = () => {
    return ( 
        <div className="categories">
            <div>
                <img src="images/shared/image-headphones.png" alt="category-img"/>
                <h1>headphones</h1>
                <Link className="to-shop-btn" to="/headphones">shop<img src="images/shared/icon-arrow-right.svg" alt=""/></Link>
            </div>
            <div>
                <img src="images/shared/image-speakers.png" alt="category-img"/>
                <h1>speakers</h1>
                <Link className="to-shop-btn" to="/speakers">shop<img src="images/shared/icon-arrow-right.svg" alt=""/></Link>
            </div>
            <div>
                <img src="images/shared/image-earphones.png" alt="category-img"/>
                <h1>earphones</h1>
                <Link className="to-shop-btn" to="/earphones">shop<img src="images/shared/icon-arrow-right.svg" alt=""/></Link>
            </div>
        </div>
     );
}
 
export default Categories;