import { Link } from "react-router-dom";
import { useGlobalContext } from "../helpers/context";
const NavHF = () => {   
    const {toTop} = useGlobalContext()
    return ( 
        <>
            <img src="../images/shared/logo.svg" alt="logo"/>
            <ul>
                <li><Link onClick={toTop} to="/">home</Link></li>
                <li><Link onClick={toTop} to="/headphones">headphones</Link></li>
                <li><Link onClick={toTop} to="/speakers">speakers</Link></li>
                <li><Link onClick={toTop} to="/earphones">earphones</Link></li>
            </ul>
        </>
     );
}
 
export default NavHF;