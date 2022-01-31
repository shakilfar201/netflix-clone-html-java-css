import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div className='home'>
            <Navbar></Navbar>
            <Featured></Featured>
        </div>
    );
};

export default Home;