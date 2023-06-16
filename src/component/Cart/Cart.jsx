import React from 'react';
import {Link} from 'react-router-dom'

const Cart = (props) => {
 console.log(props);
    const handleProceedCheckout= props.handleProceedCheckout;
    console.log(handleProceedCheckout);
    const cart=props.cart;
//   const total=cart.reduce((total,prd)=>total+prd.price,0)
let total=0;
 for(let i=0; i<cart.length; i++){
   const product= cart[i];
   total=total+product.price;



}
 
let shipping=0;
if (total>35) {
     shipping=0;

}
else if(total>15){
    shipping=4.99;

}
else if(total>0){
    shipping=12.99;
}

const tax=total/10;
const grandTotal=(total+shipping+Number(tax)).toFixed(2)
const formatNumber= num=>{
    const precision= num.toFixed(2);
    return Number(precision);
}

    return (
        <div>
            <h2>Order Summery :</h2>
            <p>Itemed Order: {cart.length}</p>
            <p>Product Price:$ {formatNumber(total) }</p>
            <p><small>shiping cost: $ {shipping}</small></p>
            <p><small>tax +vat: $ {formatNumber(tax)}</small></p>
            <p>total price: $ {grandTotal}</p>
   
        
             {
                props.children
             }


             
        </div>
    );
};

export default Cart;