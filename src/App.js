import React from 'react';
import Sign from './Signin';
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import './App.css';
import HomeScreen from './screens/HomeScreen';
function App() {
  const user = false
  return (

    <div className="app">

{!user ? <Sign/> : (
      <Router>
        
          <Routes>
            <Route path="/" element={<HomeScreen/>} >
            </Route>
          </Routes>
      </Router>
   ) }
    </div >
  );
}

export default App;
