import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import Header from './Components/header/header.component';
import SignInAndSignUp from './pages/Sign-in-and-Sign-out/Sign-in-and-Sign-out.component';

import { auth } from './firebase/firebase.utils';


class App extends React.Component {
constructor(){
  super();

  this.state = {
    currentUser : null
  };
}

unsubscribeFromAuth = null

componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(user =>{
    this.setState({ currentUser: user })
  console.log(user.displayName)
  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  // return  <div > <HomePage></HomePage></div>
  render(){
    return(
      <div>
        
        <Header currentUser={this.state.currentUser} />
        <switch>
          <Route exact path = "/" component={HomePage} />
          <Route path ="/Shop" component={ShopPage} />
          <Route path ="/signin" component={SignInAndSignUp} />
        </switch>
      </div>
  
    );

  }

 
    
}

export default App;
