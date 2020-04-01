import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage =() =>(
  <div>
    <h1> HATS Page</h1>
  </div>
)

function App() {
  // return  <div > <HomePage></HomePage></div>

  return(
    <div>
      <switch>
        <Route exact path = "/" component={HomePage} />
        <Route path ="/hats" component={HatsPage} />
      </switch>
    </div>

  )
    
}

export default App;
