import React, { useContext } from 'react';
import {Link, Outlet} from 'react-router-dom'
import { userContext } from '../../App';
import './Header.css'
import logo from '../../images/logo.svg'
const Header = () => {
    const[loggedInUser,setLoggedInUser]= useContext(userContext);
    return (
        <div className='header'>
       <div className='logo'> <img  src={logo} alt="" /></div>

        <nav>
            <Link to='/'> SHop</Link>   
          <Link to='/review'> Order Review</Link>
           <Link to='/inventory'>Manage Inventory</Link>
            <button onClick={()=>setLoggedInUser({})}>Sign Out</button>
            
        </nav>
        <Outlet></Outlet>
        </div>
    );
};

export default Header;