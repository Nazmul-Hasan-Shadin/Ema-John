import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo.svg'
const Header = () => {
    return (
        <div className='header'>
       <div className='logo'> <img  src={logo} alt="" /></div>

        <nav>
            <Link to='/'> SHop</Link>   
          <Link to='/review'> Order Review</Link>
           <Link to='/inventory'>Manage Inventory</Link>
            
        </nav>
        <Outlet></Outlet>
        </div>
    );
};

export default Header;