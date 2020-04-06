import React from 'react';
import { Link } from 'react-router-dom';
 
import { connect } from 'react-redux';
 
import CartIcon from '../cart-icon/cart-icon.component';
import  { ReactComponent as Logo }  from '../../assets/crown.svg'


import { auth } from '../../firebase/firebase.utils';



import './header.style.scss';
import CartDropDown from '../../Components/cart-dropdown.component/cart-dropdown.component';

const Header = ({ currentUser , hidden }) =>(
    <div className='header'>
         <Link to ="/" className='logo-container'> 
                        <Logo className='logo'></Logo>
 
         </Link>
         <div className='options'>
             <Link className='option' to='/shop'>
                 SHOP
             </Link>
             <Link className='option' to='/shop'>
                 CONTACT
             </Link>

             {
                 currentUser ? (
                 <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>
                 )
                 :(
                 <Link className = 'option' to ="/signin">Sign In</Link>
                 )
             }

             <CartIcon />
         </div>
         {hidden ? null : <CartDropDown />
         }

    </div>
);

const mapStateToProps = ({user: { currentUser }, cart:{ hidden }}) =>({
currentUser,
hidden

});

export default connect(mapStateToProps) (Header);