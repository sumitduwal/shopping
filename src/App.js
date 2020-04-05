import React, { useReducer } from 'react';
import { Switch ,Route , Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import { connect } from 'react-redux';
import Header from './Components/header/header.component';
import SignInAndSignUp from './pages/Sign-in-and-Sign-out/Sign-in-and-Sign-out.component';

import { setCurrentUser }  from './redux/user/user.action'

import { auth  , createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {


unsubscribeFromAuth = null

componentDidMount(){
  const { setCurrentUser } = this.props;
  this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot =>{
      setCurrentUser({
         
           id:snapShot.id,
           ...snapShot.data()
         
       });
       
      });
    }
       setCurrentUser(userAuth)
    
  });

}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  // return  <div > <HomePage></HomePage></div>
  render(){
    return(
      <div>
        
        <Header />
        <Switch>
          <Route exact path = "/" component={HomePage} />
          <Route path ="/Shop" component={ShopPage} />
          <Route exact path ="/signin" render={()=>this.props.currentUser ? (<Redirect to='/' />):(<SignInAndSignUp />)} />
        </Switch>
      </div>
  
    );

  }

 
    
}
const mapStateToProps =({ user })=>({
  currentUser : user.currentUser
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //pass gonna be action
})

export default connect (mapStateToProps,mapDispatchToProps )(App);
