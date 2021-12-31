import { Link } from "react-router-dom";
const NavHF = () => {
    return ( 
        <>
            <img src="images/shared/logo.svg" alt="logo"/>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/headphones">headphones</Link></li>
                <li><Link to="/speakers">speakers</Link></li>
                <li><Link to="/earphones">earphones</Link></li>
            </ul>
        </>
     );
}
 
export default NavHF;