import {  useHistory } from "react-router-dom";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useGlobalContext } from "../helpers/context";
import OrderComplete from "../components/OrderComplete";

const Checkout = () => {
    const {cart , total ,numberWithCommas} = useGlobalContext()

    const  [ checked,setChecked ] = useState(true)
    let vat = 0
    const history = useHistory()
    const handleBack = () => {
        history.goBack();
    }

    const onSubmit = () => {
        document.querySelector(".order-bg").classList.add("show")
        document.querySelector(".order").classList.add("show")
        document.querySelector(".order-container").classList.add("show")
    };
    const { register, handleSubmit , formState:{errors}} = useForm({
        criteriaMode : "all"   
    });

    return ( 
        <>
        <OrderComplete/>
        <div className="checkout">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <span className="go-back" 
                        onClick={()=>handleBack()}
                        >go back
                    </span>
                    <div className="checkout-main">
                        <div>
                            <h1>CHECKOUT</h1>
                                <h2>billing details</h2>
                                <div className="billing-details">
                                    <label>
                                        Name
                                        <input 
                                            {...register("name",{
                                                required:"field cannot be empty"
                                            }
                                            )} 
                                            placeholder="alexie ward"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                    <label>
                                        Email Address
                                        <input {...register("email",{
                                            required:{
                                                value:true,
                                                message:'field cannot be empty'
                                            },
                                            pattern : {
                                                value :/[A-z0-9\.]+@[A-z0-9]+\.[A-z]+/,
                                                message:"wrong format"
                                                }
                                        })} placeholder="alexie@mail.com"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="email"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                    <label>
                                        Phone Number
                                        <input {...register("phone",{
                                            required:"field cannot be empty",
                                            pattern:{
                                                value:/^\+[1-9]{1,4}\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                                                message:"wrong format",
                                            }
                                        })} placeholder="+1 202-555-0136"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="phone"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                </div>
                                <h2>shipping info</h2>
                                <div className="shipping-info">
                                    <label>
                                        Your Address
                                        <input {...register("address",{
                                            required:"field cannot be empty"
                                        })} placeholder="1137 williams avenue"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="address"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                    <label>
                                        ZIP Code
                                        <input {...register("zipCode",{
                                            required:"field cannot be empty",
                                            pattern:{
                                                value:/[0-9]{5}/,
                                                message:"wrong format"
                                            }              
                                        })} placeholder="10001"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="zipCode"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                    <label>
                                        City
                                        <input {...register("city",{
                                            required:"field cannot be empty"
                                        })} placeholder="new york"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="city"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                    <label>
                                        Country
                                        <input {...register("country",{
                                            required:"field cannot be empty"
                                        })} placeholder="united states"/>
                                        <ErrorMessage
                                            errors={errors}
                                            name="country"
                                            render={({ messages }) =>
                                            messages &&
                                            Object.entries(messages).map(([type, message]) => (
                                                <p key={type}>{message}</p>
                                            ))}
                                        />
                                    </label>
                                </div>
                                <h2>payment details</h2>
                                <div className="payment-details">
                                        <label>
                                            <span>payment method</span>
                                            <div className="payment-method">
                                                <div>
                                                    <input type='radio' {...register("method")} 
                                                    value="e-Money" id="e-money" checked onClick={() => setChecked(true)}/>
                                                <label htmlFor="e-money">e-Money</label>
                                                </div>
                                                <div>
                                                    <input type='radio' {...register("method")}  value="Cash on Delivery" id="cash" onClick={() => setChecked(false)}/>
                                                    <label htmlFor="cash">Cash on Delivery</label>
                                                </div>
                                            </div>
                                        </label>
                                            {
                                                checked ? 
                                                <div className="emoney-checked">
                                                    <label>
                                                        e-Money Number
                                                        <input {...register("number",{
                                                            required:"field cannot be empty",
                                                            pattern :{
                                                                value:/[1-9]{9}/,
                                                                message:"Wrong format",
                                                            }
                                                            
                                                        })} placeholder="238521993"/>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="number"
                                                            render={({ messages }) =>
                                                            messages &&
                                                            Object.entries(messages).map(([type, message]) => (
                                                                <p key={type}>{message}</p>
                                                            ))}
                                                        />
                                                    </label>
                                                    <label>
                                                        e-Money PIN
                                                        <input {...register("PIN",{
                                                            required:"field cannot be empty",
                                                            pattern :{
                                                                value:/[1-9]{4}/,
                                                                message:"Wrong format",
                                                            }
                                                        })} placeholder="6819"/>
                                                        <ErrorMessage
                                                            errors={errors}
                                                            name="PIN"
                                                            render={({ messages }) =>
                                                            messages &&
                                                            Object.entries(messages).map(([type, message]) => (
                                                                <p key={type}>{message}</p>
                                                            ))}
                                                        />
                                                    </label>
                                                </div>
                                                :
                                                <p>
                                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled
                                                </p>
                                            }
                                </div>
                        </div>
                        <div className="summary">
                            <h1>summary</h1> 
                            <div className="items-selected">
                            {
                                cart ? 
                                    cart.map( (product) => {
                                        const {name,img,amount,price} = product
                                        vat += (price*20/100)*amount
                                        return (
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
                                    })
                                : <p>No items in cart </p>
                            }
                            </div>
                            <ul>
                                <li><span>total</span><span>$ {numberWithCommas(total)}</span></li>
                                <li><span>shipping</span><span>$ 50</span></li>
                                <li><span>vat (included)</span><span>$ {numberWithCommas(vat.toFixed(1))}</span></li>
                                <li><span>Grand total</span><span>$ {numberWithCommas(total + 50 + vat)}</span></li>
                            </ul>
                            <input 
                                type="submit" 
                                className={total ? `see-product-btn` : `see-product-btn disable` }
                                 {...register} 
                                 value="continue & pay"   
                                 />
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
     );
}
 
export default Checkout;