import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Shop.css';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
const first10=fakeData.slice(0,10)
const [products, setProduct]=useState(first10);
const[cart,setCart]=useState([]);


const handleAddProduct=(product)=>{
    const newCart=[...cart ,product]
    setCart(newCart);
    const sameProduct= newCart.filter(pd =>pd.key==product.key);
    const count=sameProduct.length;
    addToDatabaseCart(product.key,count)
}

    return (
        <div className='shop-container'>

            <div className="product-container">
            <ul>
        {
             products.map((pd)=> <Product key={pd.key} showAddToCart={true}   product={pd} handleAddProduct={handleAddProduct} ></Product>
             )

        }

            </ul> 
            </div>
            <div className="cart-container">

              <Cart handleReviewCart={true} cart={cart}>
              <Link to='/review'>
                <button className='main-button'>Review Order</button>
       </Link>
              </Cart>
            </div>
      
        
        </div>
    );
};

export default Shop;