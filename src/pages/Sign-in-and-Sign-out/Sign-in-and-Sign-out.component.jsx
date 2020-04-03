import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';

import SignUp from '../../Components/sign-up/sign-up.component';

import './Sign-in-and-Sign-out.style.scss';


const SignInandSignUpPage =()=>(
   <div className ="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
      </div>



);

export default SignInandSignUpPage;