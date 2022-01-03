    import { Link } from "react-router-dom";
    import { useState, useEffect, useRef } from "react";
    import { useGlobalContext } from "../helpers/context";
import CartItem from "./CartItem";

    const Cart = () => {
        const {cart,total,clearCart} = useGlobalContext()
        const cartRef = useRef();
        console.log(localStorage.getItem('id'));
        const cartCloseHandler = () => {
            cartRef.current.classList.remove("display");
            document.body.style.overflow = 'visible';
        }
        return ( 
            <div className="cart-container" ref={cartRef}>
                {   
                <div className="cart">
                    <div className="close">
                        <img src="../images/shared/close.svg" 
                            alt="close"
                            onClick={cartCloseHandler}
                            />
                    </div>
                    <div className="header">
                        <h1 >cart <span>(1)</span></h1>
                        <span onClick={clearCart}>remove all</span>
                    </div>
                    <div>{total}</div>
                    <div className="cart-items">
                                {
                                    cart.map((item,index ) => {
                                        <CartItem  key={index} {...item}/>
                                    })
                                }
                    </div>
                    <div className="total">
                        <p>TOTAL</p>
                        <span>$9000</span>
                    </div>
                    <Link className="see-product-btn">checkout</Link>
                </div>
                }
            </div>
        );
    }
    
    export default Cart;                                            