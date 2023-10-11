import React, {useState} from 'react'
// import auth from "../firebase/firebase"
import { signInWithEmailAndPassword, getAuth } from '@firebase/auth';


const Login = () => {
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const signIn =() =>{
        e.preventDefault();

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("check===",userCredential)
            // Signed in 
            // const user = userCredential.user;
            // ...
          })
          .catch((error) => {
              console.log("check2===",error)
            // const errorCode = error.code;
            // const errorMessage = error.message;
          });

    }
  return (
    <div className="sign-in-container">
    <form onSubmit={signIn}>
        <h1>
            LOG IN
        </h1>
        <input type="email"placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}>

        </input>
        <input type="password"placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}>

        </input>

        <button type="submit"> Login </button>
    </form>
      
    </div>
  )
}

export default Login
