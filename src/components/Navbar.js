import { useGlobalContext } from "../helpers/context";
import NavHF from "./NavHF";
const Navbar = () => {
    const { amount } = useGlobalContext();

    const cartOpenHandler = () => {
        document.querySelector(".cart-container").classList.add("display");
        document.body.style.overflowY = 'hidden';
    }
    return (
        <nav>
            <div className="container">
                <NavHF/>
                <div className="nav-cart">
                    {amount && <span>{amount}</span>}
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