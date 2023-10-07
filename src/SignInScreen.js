import React, { useRef } from 'react'
import './signup.css'
import {auth} from './firebase'
function SignInScreen() {
  const emailRef =useRef(null);
  const passwordRef =useRef(null);

  const register=(e)=> {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser); 
    })
    .catch((error)=>{
      alert(error.message);
    });
  };
  const signIn=(e)=>{
    e.preventDefault();
  };
  return (
    <div className='Signup_body'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type="email"></input>
        <input placeholder='Password' type='password'></input>
        <button type="submit" onSubmit={signIn}>Sign In</button>
        <div className='remember'>
          <input type="checkbox" name='cb'></input>
          <label for='cd'>Remember me</label>

        </div>
        <div className='spaner'>
        <h4>
          <span className='grey'>New to Netflix? </span>
          <span className='link'onClick={register}>Sign Up Now</span>
        </h4>
        </div>
      </form>
    </div>
  )
}

export default SignInScreen