import React, { createContext, useState, useContext } from 'react';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout/Layout';
import Review from './component/Review/Review';
import Notfound from './component/Notfound/Notfound';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Login from './component/Login/Login';
import Shipment from './component/Shipment/Shipment';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const userContext = createContext();
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout></Layout>}>
      <Route path='/' element={<Shop></Shop>} />
      <Route path='/review' element={<Review></Review>} />
      <Route path='/product/:productKey' element={<ProductDetail></ProductDetail>} />
      <Route path='/shipment' element={<PrivateRoute><Shipment></Shipment></PrivateRoute>} />
      <Route path='/login' element={<Login></Login>} />
      <Route path='*' element={<Notfound></Notfound>} />
    </Route>
  )
);

const App = () => {

 
  const [loggedInUser, setLoggedInUser] = useState();


  return (
    <div>
      <userContext.Provider value={[loggedInUser,setLoggedInUser]}>

 
      <RouterProvider router={router}/>
       
    

      </userContext.Provider>
    </div>
  );
};

export default App;
/*import React, { createContext, useState, useContext } from 'react';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Layout from './Layout/Layout';
import Review from './component/Review/Review';
import Notfound from './component/Notfound/Notfound';
import ProductDetail from './component/ProductDetail/ProductDetail';
import Login from './component/Login/Login';
import Shipment from './component/Shipment/Shipment';


const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children:[
      {
        path:'review',
        element:<Review></Review>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'shipment',
        element:<Shipment></Shipment>
      },
      {
        path:'/product/:productKey',
        element:<ProductDetail></ProductDetail>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <RouterProvider router={router} />

  </React.StrictMode>,
)
 */