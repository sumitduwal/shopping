import React from 'react';

import './menu-tem.style.scss';
const MenuItem =({ title, imageUrl, size })=>(

    <div 

    className ={`${size} menu-item`}>
    <div
       className='background-image' style={{
        backgroundImage: `url(${imageUrl})` 
    }} />

     
    <div className="content">
        <h1 className="title">{title}</h1>
        <span clasName="subTitle">Shop Now </span>

    </div>
</div>
);


export default MenuItem;