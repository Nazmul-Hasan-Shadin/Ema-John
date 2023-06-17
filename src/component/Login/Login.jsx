import React,{useContext, useState} from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { GoogleAuthProvider,getAuth,signInWithPopup,sendPasswordResetEmail ,signOut,sendEmailVerification  ,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,FacebookAuthProvider } from "firebase/auth";
import { userContext } from '../../App';
import { useNavigate } from 'react-router-dom';




const app=initializeApp(firebaseConfig);

const Login = () => {
  const navigate = useNavigate();
 const [newUser,setNewUser] = useState(false);

 const [user,setUser]= useState({
  isSignedIn: false,
  name:'',
  email:'',
  photo:'',
  password:'',
  error:'',
  success: false
 });
 const [loggedInUser,setLoggedInUser]=useContext(userContext);
 
 
 

  const provider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const handleSignIn=()=>{
    const auth =getAuth();
    signInWithPopup(auth,provider)
    .then((res)=>{
       const {displayName,photoURL,email} = res.user;
       const isSignedInUser={
        isSignedIn:true,
        email:email,
        photo:photoURL,
        name: displayName
       }

       setUser(isSignedInUser);
        console.log(displayName,photoURL,email);
        
    })
    .catch((err)=>{

  const error=err.message;
  console.log(err);
  


    })
    
  }
                          //  facebook sign in

  const handleFbSignIn=()=>{
   

const auth = getAuth();
signInWithPopup(auth, fbProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    setLoggedInUser(user);

    navigate('/shipment');

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });

  }





                                  //  sign out

 const handleSignOut=()=>{
  const auth=getAuth();
  signOut(auth)
  .then(()=>{
    const signedOutUser={
      isSignedIn:false,
      name:'',
      email:'',
      photo:''
    }
    setUser(signedOutUser);
    setLoggedInUser({}); 
    navigate('/shop');
  })
  .catch(err =>{
    const error=err.message;
    console.log(error);
  })
   


 };

 const handleChange = (e) => {
   let isFieldVaild =true;
   console.log(e.target.name,e.target.value);
   if (e.target.name === 'email') {
       isFieldVaild=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value);
      console.log(isFieldVaild); 
      
    }
    if(e.target.name ==='password'){
    const isPasswordValid= /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
    isFieldVaild= isPasswordValid ;
    console.log(isFieldVaild);
    
     }
     if(isFieldVaild){
      const newUserInfo={...user };
      newUserInfo[e.target.name] =e.target.value;
      setUser(newUserInfo);
     

     }
 
   

 }



const handleSubmit=(e) =>{
  e.preventDefault();
  console.log(user.name,user.password);
  
  
if( newUser && user.name && user.password){
 const auth= getAuth();
  createUserWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    const newUserInfo={...user};
    newUserInfo.error = '';
    newUserInfo.success = true;

    setUser(newUserInfo);
    
    updateUserName(user.name);
    verifyEmail();
    
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const newUserInfo = {...user};
    newUserInfo.error=error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);


    console.log(errorMessage, errorCode, errorMessage);
    // ..
  });
}
                    //  sign up user
if (!newUser && user.email && user.password) {
  const auth= getAuth();
  signInWithEmailAndPassword(auth, user.email,user.password)
  .then((res) => {
    // Signed in 
    console.log(res);
    const newUserInfo={...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
   
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo);

    navigate('/shipment');
    console.log(res.user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode);
    const newUserInfo = {...user};
    newUserInfo.error=error.message;
    newUserInfo.success = false;
    setUser(newUserInfo);
    
  });




}





}
const updateUserName= name =>{
  const auth = getAuth();
  updateProfile(auth.currentUser, {
    displayName:name
  })
  .then((res) => {
    // Profile updated!
    console.log('user name updated');
  }).catch((error) => {
    console.log(error.message);
    // ...
  });
  

}

const verifyEmail=()=>{

  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
    });



}
const resetPassword=email=>{

  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });



}





  return (
    <div className='login-container'>
   { user.isSignedIn ? <button onClick={handleSignOut}> Sign Out</button>:<button onClick={handleSignIn}> Sign In</button>
   
   }
br
   <button onClick={handleFbSignIn}>sing in using facebook</button>

    {
      user.isSignedIn && <div>
        <p> welcome {user.name} </p>
        <p>Your email : {user.email}</p>
        <img src={user.photo} alt="" />
      </div>
    }





<input type="checkbox" onChange={()=>setNewUser(!newUser)} name='newUser'id='' />
<label htmlFor="neWUser">New User Sign Up</label> 
      <form onSubmit={handleSubmit}>
     { newUser &&  <input type="text" name='name' onBlur={handleChange} placeholder='name'  />} <br />
      <input type="text" name='email' onBlur={handleChange} placeholder='Writy your email address' required/> <br />
      <input type="password" name="password" onBlur={handleChange} placeholder='your password' required/><br />
      <button >Submit</button>
      </form>

   <button onClick={()=>resetPassword(user.email)}>Forget Or Reset Password</button>

    <p style={{color:'red'}}>{user.error}</p>
    {
      user.success && <p style={{color:'green'}}>User {newUser?"created":"logged In"} Succesfully</p>
    }
    



     
    </div>
  );
};

export default Login;