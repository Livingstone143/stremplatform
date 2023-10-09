import React, { useState } from 'react'
import './Signin.css'
import SignInScreen from './SignInScreen';
function Sign() {
   const [signIn,setSignIn]= useState(false); 
    
    return (
        <div className='loginScreen'>
            <div className='loginscreen_bg'>
                <img className='Loginlogo'
                    src="https://i.postimg.cc/9MDb0fwg/pngwing-com-1.png"
                    alt="Netflix" />
                <button onClick ={() => setSignIn(true)} className='Login_button'>Sign In</button>
                <div className='LoginScreen_gradient' />
                
                <div className='login_body'>
                {signIn?(<SignInScreen/>):(
                
                    <>
                        <h1 className='text'>The biggest Indian hits. Ready to watch here<br></br> from ₹ 149.
                        </h1>
                        <h2>Join today. Cancel anytime.</h2>
                        <h2>Ready to watch? Enter your email to create or restart your  membership.</h2>
                        <div className='emailbox'>
                            <form action='post'>
                                <input type='email' className='email' placeholder='Email address'></input>
                                <button type='submit' onSubmit={() => setSignIn(true)} className='Login_button_get'>Get started  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-mirrorinrtl="true" class="default-ltr-cache-4z3qvp e1svuwfo1" data-name="ChevronRight" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path></svg></button>
                            </form>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Sign