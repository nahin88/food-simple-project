import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <h1>FOOD.</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Food</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;