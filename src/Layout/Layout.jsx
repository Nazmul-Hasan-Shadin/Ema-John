import React, { useContext } from 'react';
import Header from '../component/Header/Header';
import { userContext } from '../App';




const Layout = () => {
    const [loggedInUser,setLoggedInUser]=useContext(userContext)

    return (
        <div className='root-layout'>
<h1>this is {loggedInUser?.email}</h1>
<Header></Header>

            


        </div>
    );
};

export default Layout;