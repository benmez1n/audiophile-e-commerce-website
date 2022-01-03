const CartItem = ({img,name,price}) => {
    return ( 
        <div className="cart-item">
        <div className="item">
            <img src={img} alt=""/>
            <div className="price-name">
                <h4>{name}</h4>
                <p>{`$${price}`}</p>
            </div>
        </div>
        <div className="control">
            <span>-</span>
            <span>1</span>
            <span>+</span>
        </div>
    </div>  
     );
}
 
export default CartItem;