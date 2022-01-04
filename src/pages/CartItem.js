import { useGlobalContext } from "../helpers/context";
const CartItem = ({img,name,price,amount}) => {
    const {increase , decrease,numberWithCommas} = useGlobalContext()
    
    return ( 
        <div className="cart-item">
        <div className="item">
            <img src={img} alt=""/>
            <div className="price-name">
                <h4>{name}</h4>
                <p>{`$ ${numberWithCommas(price)}`}</p>
            </div>
        </div>
        <div className="control">
            <span onClick={()=>decrease(name)}>-</span>
            <span>{amount}</span>
            <span onClick={()=>increase(name)}>+</span>
        </div>
    </div>  
     );
}
 
export default CartItem;