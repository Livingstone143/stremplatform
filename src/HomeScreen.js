import React from 'react'
import "./Homescreen.css";
import Nav from './Nav';
import Banner from './Banner';
import requests from './Requests';
import Row from './Row';
function HomeScreen() {
    return (
        <div className='homeScreen'>
<Nav/>
 <Banner/>
 <Row
  title="Trending On Netflix" 
  fetchUrl={requests.get}
   />
 <Row
  title="Top Rated" 
  fetchUrl={requests.rated}
   />
   <Row
  title="Action movies" 
  fetchUrl={requests.action}
   />
   <Row
  title="War Movies" 
  fetchUrl={requests.war}
   />
   <Row
  title="Romance Movies" 
  fetchUrl={requests.romance}
   />
   <Row
  title="Trending On Netflix" 
  fetchUrl={requests.fan}
   />
        </div>


    )

}

export default HomeScreen