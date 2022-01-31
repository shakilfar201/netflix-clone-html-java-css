import React, { useState } from 'react';
import './Navbar.css';
import profile from '../../images/pexels-canva-studio-3277802.jpg'
import netIcon from '../../images/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w-removebg-preview.png';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    window.onscroll = () => {
        setIsScroll(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScroll ? 'navbar scrolled' : 'navbar'}>
            <div className="container">
                <div className="left">
                    <img src={netIcon} alt="" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className='icon'/>
                    <span>KID</span>
                    <Notifications className='icon'/>
                    <img src={profile} alt="" />
                    <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>settings</span>
                        <span>Logout</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;