import { useParams } from 'react-router-dom';
import headphonesData from './../data/headphonesData' 
const ProductsMainPage = () => {
    const param = useParams();
    const category = param.category 
    return ( 
        <main className='prodcts-page'>
            <header>
                <div className='container'>
                    <h1>{category}</h1>
                </div>
            </header>
        </main>
    );
}
 
export default ProductsMainPage;