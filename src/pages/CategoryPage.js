import { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { useGlobalContext } from '../helpers/context';

import Categories from '../components/Categories';
import BestGear from '../components/BestGear';

import headphones from '../data/headphonesData'
import earphones from '../data/earphonesData'
import speakers from '../data/speakersData'




const ProductsMainPage = () => {
    const {toTop} = useGlobalContext()

    const param = useParams();
    const categoryParam = param.category
    const [data, setData] = useState([]) 


    useEffect(
        () => {

            if(categoryParam === "headphones"){
                setData(headphones)
            }
            else if(categoryParam === "speakers"){
                setData(speakers)
            }
            else{
                setData(earphones)
            }
        },[data,categoryParam]
    )

    return ( 
        <main className='products-page'>
            <header>
                <div className='container'>
                    <h1>{data[0]}</h1>
                </div>
            </header>
            <div className='container'>
                {
                    data.map((product,index)=>{
                        if(index > 0){
                            return (
                                <div className = "product-presentation"
                                    key = {product.id} >
                                    <img src={product.img} alt={product.name} data-aos="zoom-in" data-aos-duration="3000"/>
                                    <div data-aos="zoom-in" data-aos-duration="3000">
                                        {product.new && <span className='new'>NEW PRODUCT</span>}
                                        <h1>{product.name}</h1>
                                        <h1>{data[0]}</h1>
                                        <p>{product.descrption}</p>
                                        <Link onClick={toTop}
                                            to={product.link} 
                                            className='see-product-btn'>see product</Link>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
                <Categories />
                <BestGear />
            </div>
        </main>
    );
}
 
export default ProductsMainPage;