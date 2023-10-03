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
  title="NETFLIX ORIGINALS" 
  fetchUrl={requests.get}
  isLargeRow
   />
 <Row
  title="Trending" 
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
  title="Fantasy Movies" 
  fetchUrl={requests.fan}
   />
        </div>


    )

}

export default HomeScreen