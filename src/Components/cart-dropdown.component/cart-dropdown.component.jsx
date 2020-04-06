import React from 'react';
import CustomButtom from '../custom-button/custom-button.component';

import './cart-dropdown.style.scss';

const CartDropDown = () => (
    <div className = 'cart-dropdown'>
        <div className='cart-tems' />

        <CustomButtom>Go to Check Out</CustomButtom>

    </div>
);

export default CartDropDown;