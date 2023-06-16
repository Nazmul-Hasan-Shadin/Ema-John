import React,{useEffect,useState} from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import Shipment from '../Shipment/Shipment';
import './Review.css'
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [cart,setCart] =useState([])
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate()
const handleProceedCheckout=() => {

     navigate('/shipment');


}




    useEffect((() => {
    //  cart
 const savedCart= getDatabaseCart();
 const productKeys=Object.keys(savedCart);

 const cartProduct= productKeys.map(key =>{
  const product=fakeData.find(pd=>pd.key===key)
  product.quantity=savedCart[key];
 return product;

 });
setCart(cartProduct);

    }),[])
    return (
        <div className='twin-container'>
       <div>
       {
            cart.map(pd=><ReviewItem key={pd.key} product={pd}></ReviewItem>)
         }
       </div>

       <div className='cart-container'>

           <Cart cart={cart}>
            <button onClick={handleProceedCheckout} className='main-button'> Proceed Checkout </button>
           </Cart>

       </div>
        </div>
    );
};

export default Review;