import React,{useState,useEffect} from 'react'
import './Banner.css'
import axios from 'axios';
import requests from'./Requests';
function Banner() {
    const [movie,setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.get);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ]

            );
            return request;
              

            }
 fetchData();

},[]);
const img=`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
console.log(img);
  return (
   <header className='banner' style={{
    backgroundSize:"cover",
    backgroundImage: `URL("${img}")`,
     }}>
     <div className='Banner_contents'>
        <h1 className='Banner_titles'>{movie.original_title}</h1>
        <div className='Banner_button'>    
     <button className='banner_buttons'>Play</button>
     <button className='banner_buttons'>My list</button>
     </div> 
     <h1 className='Des'>{movie.overview}</h1>
     </div>
     <div className='banner--fadeBottom'/>
   </header>
   
  )
}

export default Banner