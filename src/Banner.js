import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from'./axios';
import requests from'./Requests';
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fertchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length-1)
                ]
            );
            return request;
            }
 fetchData();
 
    },[]);
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