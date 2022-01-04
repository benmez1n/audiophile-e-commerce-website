import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../helpers/context";

const OrderComplete = () => {
    const {cart,total,numberWithCommas,handleEndPay} = useGlobalContext()

    const bg = useRef()
    const order = useRef()
    const orderContainer = useRef()

    return ( 
        <>
            <div className="order-bg" ref={bg} onClick={handleEndPay} >
            </div>
            <div className="order" ref={order}>
                <div className="order-container" ref={orderContainer}>
                    <img src="../images/shared/icon-check-mark.svg"/>
                    <h1>
                    THANK YOU
                    FOR YOUR ORDER
                    </h1>
                    <p>You will receive an email confirmation shortly.</p>
                    <div>
                        <div className="items-selected">
                            {
                                cart.map((product=>{
                                    const {name,img,amount,price} = product
                                    return(
                                        <div key={name} className="item-selected">
                                            <div>
                                                <img src={img} alt={name}/>
                                                <div>
                                                    <span>{name}</span>
                                                    <span>$ {numberWithCommas(price)}</span>
                                                </div>
                                            </div>
                                            <span>x{amount}</span>
                                        </div>
                                    )
                                }))
                            }
                        </div>
                        <div className="total">
                            <h2>TOTAL</h2>
                            <span>$ {numberWithCommas(total)}</span>
                        </div>
                    </div>
                    <Link to="/" className="see-product-btn" onClick={handleEndPay}>back to home</Link>
                </div>
            </div>
        </>
     );
}
 
export default OrderComplete;