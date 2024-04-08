import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
           <h1>Welcome to my Rest Countries</h1> 
           <nav className='menu'>
           <a href="/Home">Home</a>
           <a href="/Countries">Countries</a>
           <a href="/About">About</a>
           </nav>
        </div>
    );
};

export default Header;