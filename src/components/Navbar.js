import NavHF from "./NavHF";
const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <NavHF/>
                <div id="cart-container">
                <img src = "images/shared/icon-cart.svg" alt="cart"/>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;