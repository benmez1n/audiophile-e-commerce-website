import { Link } from "react-router-dom";
import { useRef } from "react";
import { useGlobalContext } from "../helpers/context";
import CartItem from "./CartItem";

const Cart = () => {
    const {cart,total,clearCart,amount} = useGlobalContext()
    
    const cartRef = useRef();

    const cartCloseHandler = () => {
        cartRef.current.classList.remove("display");
        document.body.style.overflow = 'visible';
    }

    if(!cart.length){

        return (
            <div className="cart-container" ref={cartRef}> 
                <div className="cart">
                    <div className="close">
                        <img src="../images/shared/close.svg" 
                            alt="close"
                            onClick={cartCloseHandler}
                            />
                    </div>
                    <div className="empty">
                        <h1>Your cart is empty</h1>
                        <img src="../images/cart/empty-cart.png" alt=""/>
                    </div>
                </div>
            </div>
        )
    }

    else{

        return ( 
            <div className="cart-container" ref={cartRef}> 
                <div className="cart">
                    <div className="close">
                        <img src="../images/shared/close.svg" 
                            alt="close"
                            onClick={cartCloseHandler}
                            />
                    </div>
                    <div className="header">
                        <h1 >cart <span>({amount})</span></h1>
                        <span onClick={clearCart}>remove all</span>
                    </div>
                    <div className="cart-items">
                                {
                                        cart.map((item,index ) => {
                                            return (
                                            <CartItem  key={index} {...item}/>
                                        )})
                                }
                    </div>
                    <div className="total">
                        <p>TOTAL</p>
                        <span>${total}</span>
                    </div>
                    <Link 
                        to="/checkout" 
                        className="see-product-btn"
                        onClick={cartCloseHandler}
                        >
                        checkout
                    </Link>
                </div>
            </div>
        );
    }


    
}
    
export default Cart;                                            