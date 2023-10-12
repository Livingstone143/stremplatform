import React, { useState } from 'react'
import './signup.css'
import SignInScreen from './SignInScreen';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
const Signup = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn,setSignIn]= useState(false); 
  const setSignIN(){
    
  }
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='Signup_body'>
    {signIn?(<SignInScreen/>):(
    <form nSubmit={signUp}>
        <h1>Sign In</h1>

        <input placeholder='Email' type="email"  onChange={(e) => setEmail(e.target.value)}></input>
        <input placeholder='Password' type='password'  onChange={(e) => setPassword(e.target.value)}
></input>
        <button type="submit">Sign In</button>
        <div className='remember'>
          <input type="checkbox" name='cb'></input>
          <label for='cd'>Remember me</label>

        </div>
        <div className='spaner'>
        <h4>
          <span className='grey'>New to Netflix? </span>
          <span className='link' onClick={() => setSignIn(true)} >Sign In</span>
        </h4>
        </div>
      </form>
    )}
    </div>
  )
}

export default Signup