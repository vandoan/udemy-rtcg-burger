import React from 'react';
import classes from './Logo.css';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div className='Logo'>
        <img src={burgerLogo} alt='Burger logo' />
    </div>
)

export default logo;