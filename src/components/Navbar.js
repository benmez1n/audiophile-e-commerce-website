import NavHF from "./NavHF";
const Navbar = ({toTop}) => {
    return (
        <nav>
            <div className="container">
                <NavHF onTop={toTop}/>
                <div id="cart-container">
                <img src = "../images/shared/icon-cart.svg" alt="cart"/>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;