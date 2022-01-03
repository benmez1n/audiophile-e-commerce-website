import { useState , useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {  useHistory } from "react-router-dom";

import { useGlobalContext } from "../helpers/context";

import BestGear from "../components/BestGear";
import Categories from "../components/Categories";

import earphones from "../data/earphonesData";
import headphones from "../data/headphonesData";
import speakers from "../data/speakersData";

const ProductPage = () => {
    const {toTop,handleIncrease,handleDecrease,addToCart} = useGlobalContext()

    const param = useParams()
    const id = Number(param.productId)
    const category = param.category
    
    const history = useHistory()
    
    const [data, setData] = useState([])
    const [count , setCount ] = useState(1)

    const handleBack = () => {
        history.goBack();
    }

    useEffect(
        () => {
            if(category === "headphones"){
                setData(headphones)
            }
            else if(category === "speakers"){
                setData(speakers)
            }
            else{
                setData(earphones)
            }
        },[data,category,id]
    ) 
    return ( 
        <>
            {data[id] &&
            
                <main className="product-details">
                    <div className="container">
                        <span className="go-back" 
                        onClick={()=>handleBack()}
                        data-aos="zoom-in" data-aos-duration="3000"
                        >go back</span>
                        <div className="intro">
                            <img 
                                src={`../${data[id].img}`} alt="" 
                                data-aos="zoom-in" data-aos-duration="3000"
                            />
                            <div className="add-product" 
                                data-aos="zoom-in" data-aos-duration="3000"
                                >
                                {data[id].new && <span className="new">NEW PRODUCT</span>}
                                <h1>{data[id].name}</h1>
                                <h1>{data[0]}</h1>
                                <p>{data[id].descrption}</p>
                                <span className="price">{`$${data[id].price}`}</span>
                                <div>
                                    <div className="control">
                                        <span onClick={()=>setCount(handleDecrease(count))}>-</span>
                                        <span >{count}</span>
                                        <span onClick={()=> setCount(handleIncrease(count))}>+</span>
                                    </div>
                                    <div 
                                        onClick=
                                        { 
                                            () => {addToCart(
                                                data[id].img,
                                                data[id].name,
                                                data[id].price,
                                                count
                                            )
                                            }
                                        }
                                        className="see-product-btn">add to cart</div>
                                </div>
                            </div>
                        </div>
                        <div className="features-inbox" >
                            <div className="features" data-aos="zoom-in" data-aos-duration="3000">
                                <h1>features</h1>
                                <p>{data[id].features}</p>
                            </div>
                            <div className="in-box" data-aos="zoom-in" data-aos-duration="3000">
                                <h1>in box</h1>
                                <ul className="items">
                                {
                                    data[id].includedItems.map(
                                        (item,index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{item.quantity}x</span>
                                                    {item.item}
                                                </li>            
                                            )
                                        }
                                    )
                                }
                                </ul>
                            </div>
                        </div>
                        <div className="gallery">
                                <div data-aos="zoom-in" data-aos-duration="3000">
                                    <img src={`../${data[id].gallery.first}`} alt=""/>
                                    <img src={`../${data[id].gallery.second}`} alt=""/>
                                </div>
                                <img data-aos="zoom-in" data-aos-duration="3000"
                                    src={`../${data[id].gallery.third}`} alt=""/>
                        </div>
                        <div className="others">
                            <h1 >you may also like</h1>
                            <div className="suggestions">
                            {   
                                data[id].others.map(
                                    (item,index) => {
                                        return(
                                            <div className="sugg-item" 
                                                key={index}>
                                                <img 
                                                    src={`../${item.image}`} alt=""
                                                    data-aos="zoom-in" data-aos-duration="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-offset="300"
                                                    />
                                                <h1 data-aos="zoom-in" data-aos-duration="3000"
                                                    data-aos-easing="linear"
                                                    data-aos-offset="300">
                                                        {item.name}
                                                </h1>
                                                <Link onClick={toTop}
                                                        className="see-product-btn" 
                                                        to={item.link}>
                                                            see product
                                                </Link>
                                            </div>
                                        )
                                    }
                                )
                            }
                            </div>  
                        </div>
                        <Categories/>
                        <BestGear />
                    </div>
                </main>
            }
        </>
    );
}
 
export default ProductPage;