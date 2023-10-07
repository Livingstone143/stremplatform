import React from 'react'
import './signup.css'
function SignInScreen() {
  const register=(e)=> {
    e.preventDefault();
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
        <button type="submit" onClick={signIn}>Sign In</button>
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