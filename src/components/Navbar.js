import { useGlobalContext } from "../helpers/context";
import NavHF from "./NavHF";
const Navbar = () => {
    // const { dispalyItems } = useGlobalContext();

    const cartOpenHandler = () => {
        document.querySelector(".cart-container").classList.add("display");
        document.body.style.overflow = 'hidden';
    }
    return (
        <nav>
            <div className="container">
                <NavHF/>
                <div className="nav-cart">
                    <img 
                        src = "../images/shared/icon-cart.svg" 
                        alt="cart"
                        onClick={cartOpenHandler}
                        />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;