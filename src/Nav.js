import React, { useEffect, useState } from 'react'
import "./Nav.css";
function Nav() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      }
      else {
          setColorchange(false);
      }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    
    
    <div className={colorChange ? 'nav_black nav' : 'nav'}>
    <div className='nav_contents'>
    <img 
    className='nav_logo'
      src="https://i.postimg.cc/9MDb0fwg/pngwing-com-1.png"
  alt=""
    />
    <img 
    className='nav_avatar'
      src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
    alt=""

    />
    </div>
    </div>
  )
}

export default Nav