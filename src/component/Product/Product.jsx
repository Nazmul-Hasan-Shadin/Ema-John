import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
  // console.log(props);
    const {img,name,seller,price,stock,key }=props.product;
    
    return (
        <div className='product'>
       <div>
    <img src={img} alt="" />
       </div>
       <div>
     <h4 className='product-name'><Link to={"/product/"+key}>{name}</Link></h4> <br />
     <p><small>By: {seller}</small></p>
     <p><small>price ${price}</small></p>
     <p><small>Onlh {stock} left in stock</small></p>

    { props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className='main-button'>
     <FontAwesomeIcon icon={faCartShopping } />Add to cart

     </button>}
       </div>
        </div>
    );
};

export default Product;