import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import './Header.css'

const Header = () => {
    return (
       <div className='banner-bg backdrop-brightness-50'>
         <div className='max-w-[1320px] mx-auto h-[600px]'>
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
       </div>
    );
};

export default Header;