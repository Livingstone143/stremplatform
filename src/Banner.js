import React from 'react'
import './Banner.css'
function Banner() {
  return (
   <header className='banner' style={{
    backgroundSize:"cover",
    backgroundImage:"url('https://i.postimg.cc/Bb2Wm4Zn/aa.png')",
     }}>
     <div className='Banner_contents'>
        <h1 className='Banner_titles'>Bro</h1>
        <div className='Banner_button'>    
     <button className='banner_buttons'>Play</button>
     <button className='banner_buttons'>My list</button>
     </div> 
     <h1 className='Des'>An overworked man who often fails to focus on his loved ones is given a chance to turn his life around when he meets Titan, the god of time.</h1>
     </div>
     <div className='banner--fadeBottom'/>
   </header>
   
  )
}

export default Banner