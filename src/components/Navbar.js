import { useRef } from 'react'

import { UilBars } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

import { useGlobalContext } from "../helpers/context";
import NavHF from "./NavHF";
import Categories from './Categories'
const Navbar = () => {
    const { amount } = useGlobalContext();

    const menu = useRef()
    const openBtn = useRef()
    const closeBtn = useRef()

    const cartOpenHandler = () => {
        document.querySelector(".cart-container").classList.add("display");
        document.body.style.overflowY = 'hidden';
    }

    const openHandler = () => {
        closeBtn.current.style.display = "block"
        openBtn.current.style.display = "none"
        menu.current.classList.add("show")
    }
    
    const closeHandler = () => {
        openBtn.current.style.display = "block"
        closeBtn.current.style.display = "none"
        menu.current.classList.remove("show")
    }

    return (
        <nav>
            <div className="mobile">
                <div className="container">
                    <div className="toggle">
                        <span className="toggle-btn" 
                                ref={openBtn}>
                            <UilBars size="20" color= "#ffffff"
                                onClick={openHandler}
                                />
                        </span>
                        <span className="toggle-btn" 
                                ref={closeBtn}>
                            <UilTimes size="20" color= "#ffffff"
                                onClick = {closeHandler}
                                />
                        </span>
                        
                    </div>
                    <div className='menu' ref={menu}>
                        <Categories />
                    </div>
                </div>
            </div>
            <div className="container">
                <NavHF/>
                <div className="nav-cart">
                    {amount>0 && <span>{amount}</span>}
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