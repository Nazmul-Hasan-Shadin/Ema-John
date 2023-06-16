// import { initializeApp } from 'firebase/app';
// import firebaseConfig from './firebase.config';
// import { GoogleAuthProvider,getAuth,signInWithPopup,signOut ,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile,FacebookAuthProvider } from "firebase/auth";


//  export const initializeLoginFramework=()=>{
//     if (firebase.app.length==0) {
//         initializeApp(firebaseConfig);
//     }
// }

// export   const handleGoogleSignIn =()=>{
//     const provider = new GoogleAuthProvider();
//     const auth =getAuth();
//    return signInWithPopup(auth,provider)
//     .then((res)=>{
//        const {displayName,photoURL,email} = res.user;
//        const isSignedInUser={
//         isSignedIn:true,
//         email:email,
//         photo:photoURL,
//         name: displayName
//        }

//      return  setUser(isSignedInUser);
//         console.log(displayName,photoURL,email);
        
//     })
//     .catch((err)=>{

//   const error=err.message;
//   console.log(err);
  


//     })
    
//   }

//   export const handleFbSignIn=()=>{
//     const fbProvider = new Faceboo
    
    
    
    
    
    
    
//     AuthProvider();
   

//     const auth = getAuth();
//     return signInWithPopup(auth, fbProvider)
//       .then((result) => {
//         // The signed-in user info.
//         const user = result.user;
//         return user
//         console.log(user);
         
    
//         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//         const credential = FacebookAuthProvider.credentialFromResult(result);
//         const accessToken = credential.accessToken;
    
//         // IdP data available using getAdditionalUserInfo(result)
//         // ...
//       })
//       .catch((error) => {
       
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.customData.email;
//         // The AuthCredential type that was used.
//         const credential = FacebookAuthProvider.credentialFromError(error);
    
//         // ...
//       });
    
//       }
    
//     export  const handleSignOut=()=>{
//         const auth=getAuth();
//      return   signOut(auth)
//         .then(()=>{
//           const signedOutUser={
//             isSignedIn:false,
//             name:'',
//             email:'',
//             photo:''
//           }
//           return signedOutUser
//         })
//         .catch(err =>{
//           const error=err.message;
//           console.log(error);
//         })
         
      
      
//        }; 

//     //    export const createUserWithEmailAndPassword=()=>{
//     //     const auth= getAuth();
//     //     createUserWithEmailAndPassword(auth, user.email, user.password)
//     //     .then((userCredential) => {
//     //       // Signed in 
//     //       console.log(userCredential);
//     //       const newUserInfo={...user};
//     //       newUserInfo.error = '';
//     //       newUserInfo.success = true;
      
//     //       setUser(newUserInfo);
          
//     //       updateUserName(user.name);
          
          
//     //       // ...
//     //     })
//     //     .catch((error) => {
//     //       const errorCode = error.code;
//     //       const newUserInfo = {...user};
//     //       newUserInfo.error=error.message;
//     //       newUserInfo.success = false;
//     //       setUser(newUserInfo);
      
      
//     //       console.log(errorMessage, errorCode, errorMessage);
//     //       // ..
//     //     });





//     //    }
//     // //    export signInWithEmailAndPassword=()=>{
//     // //     const auth= getAuth();
//     // //     signInWithEmailAndPassword(auth, user.email,user.password)
//     // //     .then((res) => {
//     // //       // Signed in 
//     // //       console.log(res);
//     // //       const newUserInfo={...user};
//     // //       newUserInfo.error = '';
//     // //       newUserInfo.success = true;
         
//     // //       setUser(newUserInfo);
//     // //       setLoggedInUser(newUserInfo);
      
//     // //       navigate('/shipment');
//     // //       console.log(res.user);
//     // //       // ...
//     // //     })
//     // //     .catch((error) => {
//     // //       const errorCode = error.code;
//     // //       console.log(errorCode);
//     // //       const newUserInfo = {...user};
//     // //       newUserInfo.error=error.message;
//     // //       newUserInfo.success = false;
//     // //       setUser(newUserInfo);
          
//     // //     });
      


//     // //    }

//     // //    const updateUserName= name =>{
//     // //     const auth = getAuth();
//     // //     updateProfile(auth.currentUser, {
//     // //       displayName:name
//     // //     })
//     // //     .then((res) => {
//     // //       // Profile updated!
//     // //       console.log('user name updated');
//     // //     }).catch((error) => {
//     // //       console.log(error.message);
//     // //       // ...
//     // //     });
        
      
//     // //   }